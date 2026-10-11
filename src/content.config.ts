import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

/** "2025" or "2025-02". Month precision is optional so year-only ranges stay honest. */
const yearMonth = z.string().regex(/^\d{4}(-(0[1-9]|1[0-2]))?$/, "expected YYYY or YYYY-MM");

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    /** One line, shown in project lists. */
    summary: z.string(),
    /** One sentence, shown under the title on the project page. */
    tagline: z.string(),
    year: z.number().int(),
    category: z.enum(["frontend", "backend"]),
    tech: z.array(z.string()).default([]),
    githubUrl: z.url().optional(),
    liveUrl: z.url().optional(),
    featured: z.boolean().default(false),
    /** Lower sorts first. */
    order: z.number().int(),
  }),
});

const education = defineCollection({
  loader: file("src/content/education.yaml"),
  schema: z.object({
    school: z.string(),
    credential: z.string(),
    start: yearMonth,
    end: yearMonth.optional(),
  }),
});

const certifications = defineCollection({
  loader: file("src/content/certifications.yaml"),
  schema: z.object({
    title: z.string(),
    year: z.number().int(),
  }),
});

const timeline = defineCollection({
  loader: file("src/content/timeline.yaml"),
  schema: z.object({
    /** Free-text label shown in the left column, e.g. "Aug 2022 — 2023". */
    when: z.string(),
    /** Sort key (newest first). */
    year: z.number().int(),
    event: z.string(),
  }),
});

const skills = defineCollection({
  loader: file("src/content/skills.yaml"),
  schema: z.object({
    group: z.string(),
    items: z.array(z.string()),
  }),
});

export const collections = { projects, education, certifications, timeline, skills };
