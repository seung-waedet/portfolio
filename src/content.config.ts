import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    /** One line, shown in project lists. */
    summary: z.string(),
    /** One sentence, shown under the title on the project page. */
    tagline: z.string(),
    year: z.number().int(),
    tech: z.array(z.string()).default([]),
    githubUrl: z.url().optional(),
    liveUrl: z.url().optional(),
    /** Lower sorts first. */
    order: z.number().int(),
  }),
});

export const collections = { projects };
