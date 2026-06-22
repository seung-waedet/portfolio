// @ts-check
import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || "placeholder";
const dataset = process.env.PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  site: "https://seungwaakpan.com",
  integrations: [
    sitemap(),
    sanity({
      projectId,
      dataset,
      useCdn: true,
      apiVersion: "2025-01-01",
      studioBasePath: "/studio",
    }),
    react(),
  ],
});
