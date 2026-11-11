import { test } from "node:test";
import assert from "node:assert/strict";
import { findProblems, visibleText } from "./check-copy.mjs";

const page = (body, meta = "") => `<html><head><title>t</title>${meta}<style>a{content:"—"}</style></head><body>${body}</body></html>`;

test("clean copy passes", () => {
  const html = page(`<li>Cut LLM cold-start time on staging from 266s to 13–30s in most runs.</li>`);
  assert.deepEqual(findProblems(html), []);
});

test("en dash ranges pass, em dashes fail", () => {
  assert.deepEqual(findProblems(page("<p>Jan 2025 – now</p>")), []);
  assert.equal(findProblems(page("<p>software developer — python</p>")).length, 1);
  assert.equal(findProblems(page("<p>a &mdash; b</p>")).length, 1);
});

test("em dash in a meta description fails", () => {
  const html = page("<p>ok</p>", `<meta name="description" content="Engineer — LLMs">`);
  assert.match(findProblems(html)[0], /em dash/);
});

test("em dashes inside style and script are ignored", () => {
  assert.deepEqual(findProblems(page(`<script>// a — b</script><p>ok</p>`)), []);
});

test("banned words fail, case-insensitive", () => {
  assert.match(findProblems(page("<p>Leveraged LangChain.</p>"))[0], /leveraged/);
  assert.match(findProblems(page("<p>A robust API.</p>"))[0], /robust/);
});

test("cold start without 'on staging' fails", () => {
  const problems = findProblems(page("<li>Cut LLM cold-start time from 266s to 13–30s in most runs.</li>"));
  assert.match(problems[0], /staging/);
});

test("Qwen claim needs 'behind a flag' in the same sentence", () => {
  assert.equal(findProblems(page("<li>Tested Qwen3-4B. The path is behind a flag.</li>")).length, 1);
  assert.deepEqual(findProblems(page("<li>Tested Qwen3-4B before building a path behind a flag.</li>")), []);
});

test("audit claim needs 'directed coding agents'", () => {
  assert.equal(findProblems(page("<li>Audited 29 Celery tasks and found bugs.</li>")).length, 1);
});

test("'replaced M2M100' is forbidden outright", () => {
  const problems = findProblems(page("<li>Replaced M2M100 with Qwen3-4B behind a flag.</li>"));
  assert.ok(problems.some((p) => /forbidden claim/.test(p)));
});

test("links to private repos fail", () => {
  assert.equal(findProblems(page(`<a href="https://github.com/KevinWinterFoundation/orascribe-backend/pull/5">pr</a>`)).length, 1);
  assert.equal(findProblems(page(`<a href="https://github.com/seung-waedet/church-pwa">x</a>`)).length, 1);
  assert.deepEqual(findProblems(page(`<a href="https://github.com/seung-waedet/document-rag-service">x</a>`)), []);
});

test("visibleText decodes entities", () => {
  assert.match(visibleText(page("<p>AI &amp; Backend</p>")), /AI & Backend/);
});
