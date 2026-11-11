#!/usr/bin/env node
// Fails the build when the rendered site breaks the copy rules:
//   - no em dashes (en dashes in ranges are fine);
//   - none of the banned stock words;
//   - no links to private repos;
//   - CV claims keep the qualifiers the claims sheet requires
//     (~/Desktop/Job-applications/resources/cv-claims-map.md).
//
//   node scripts/check-copy.mjs [dist-dir]     # default: dist
//
// Runs on built HTML, so it checks what a visitor sees, wherever the text came from.
import { readFile, readdir } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const BANNED_WORDS = [
  "delve", "crucial", "robust", "comprehensive", "leverage", "leveraged", "leveraging",
  "seamless", "seamlessly", "showcase", "passionate",
];

const PRIVATE_LINKS = [
  /github\.com\/KevinWinterFoundation/i,
  /github\.com\/seung-waedet\/church-pwa/i,
  /github\.com\/seung-waedet\/dp-project/i,
];

/** A sentence that matches `claim` must also match `qualifier`. */
export const CLAIM_QUALIFIERS = [
  { claim: /\b266s\b/, qualifier: /\bon staging\b/i, why: "cold start is staging-only" },
  { claim: /\bQwen3-4B\b/, qualifier: /\bbehind a flag\b/i, why: "Qwen translation is flagged, not a replacement" },
  { claim: /\b29 Celery tasks\b/, qualifier: /\bdirected coding agents\b/i, why: "agents did the audit" },
  { claim: /\bsix defects\b/, qualifier: /\bfive of them affecting money or data\b/i, why: "claims sheet wording" },
];

/** Claims that must never appear, whatever the sentence says. */
const FORBIDDEN_CLAIMS = [
  { pattern: /\breplaced M2M100\b/i, why: "Qwen3-4B was tested behind a flag, not swapped in" },
  { pattern: /\bRunPod\b/, why: "RunPod was deleted in backend #127" },
];

const stripNonText = (html) =>
  html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, " ");

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&mdash;|&#8212;|&#x2014;/gi, "—");

/** Visible text plus the title and meta description, which show in search results and link cards. */
export function visibleText(html) {
  const body = stripNonText(html);
  const metas = [...body.matchAll(/<meta\s[^>]*content="([^"]*)"/gi)].map((m) => m[1]);
  const text = body.replace(/<[^>]+>/g, " ");
  return decode([...metas, text].join(" . ")).replace(/\s+/g, " ");
}

const sentences = (text) => text.split(/(?<=[.!?])\s+/);

/** Returns a list of human-readable problems found in one HTML document. */
export function findProblems(html) {
  const problems = [];
  const text = visibleText(html);

  if (text.includes("—")) problems.push(`em dash in: "${excerpt(text, text.indexOf("—"))}"`);

  for (const word of BANNED_WORDS) {
    const m = new RegExp(`\\b${word}\\b`, "i").exec(text);
    if (m) problems.push(`banned word "${word}" in: "${excerpt(text, m.index)}"`);
  }

  for (const link of PRIVATE_LINKS) {
    if (link.test(html)) problems.push(`link to a private repo: ${link.source}`);
  }

  for (const s of sentences(text)) {
    for (const { claim, qualifier, why } of CLAIM_QUALIFIERS) {
      if (claim.test(s) && !qualifier.test(s)) problems.push(`"${claim.source}" without "${qualifier.source}" (${why}): "${s.trim()}"`);
    }
  }

  for (const { pattern, why } of FORBIDDEN_CLAIMS) {
    const m = pattern.exec(text);
    if (m) problems.push(`forbidden claim (${why}): "${excerpt(text, m.index)}"`);
  }

  return problems;
}

const excerpt = (text, at) => text.slice(Math.max(0, at - 50), at + 50).trim();

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(path);
    else if (entry.name.endsWith(".html")) yield path;
  }
}

async function main(dist = "dist") {
  let failures = 0;
  let files = 0;
  for await (const file of htmlFiles(dist)) {
    files++;
    for (const problem of findProblems(await readFile(file, "utf8"))) {
      failures++;
      console.error(`${relative(dist, file)}: ${problem}`);
    }
  }
  if (files === 0) {
    console.error(`check-copy: no HTML found in ${dist}; run astro build first`);
    process.exit(1);
  }
  if (failures > 0) {
    console.error(`check-copy: ${failures} problem(s) in ${files} page(s)`);
    process.exit(1);
  }
  console.log(`check-copy: ${files} page(s) clean`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await main(process.argv[2]);
