import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 80 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "icon", type: "string", description: "Single glyph for the row (e.g. ✦ ▶ ≈)" }),
    defineField({ name: "tagline", type: "string", description: "One-line description" }),
    defineField({ name: "year", type: "string", description: "e.g. 2025 or 2024 — 2025" }),
    defineField({ name: "tech", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "githubUrl", type: "url" }),
    defineField({ name: "liveUrl", type: "url" }),
    defineField({
      name: "description",
      type: "array",
      of: [{ type: "block" }],
      description: "Long-form project page body",
    }),
    defineField({
      name: "featured",
      type: "boolean",
      description: "Show on homepage",
      initialValue: false,
    }),
    defineField({
      name: "order",
      type: "number",
      description: "Lower number = higher on the homepage",
      initialValue: 100,
    }),
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "title", subtitle: "tagline" } },
});
