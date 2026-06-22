import { defineField, defineType } from "sanity";

export const book = defineType({
  name: "book",
  title: "Book",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "author", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "Currently reading", value: "reading" },
          { title: "Finished", value: "finished" },
          { title: "Queued", value: "queued" },
          { title: "Abandoned", value: "abandoned" },
        ],
        layout: "radio",
      },
      initialValue: "reading",
      validation: (r) => r.required(),
    }),
    defineField({ name: "icon", type: "string", description: "Single glyph (e.g. ❦ ❀ ¶)" }),
    defineField({ name: "currentPage", type: "number" }),
    defineField({ name: "totalPages", type: "number" }),
    defineField({ name: "note", type: "string", description: "One-liner — appears under the title" }),
    defineField({ name: "startedAt", type: "date" }),
    defineField({ name: "finishedAt", type: "date" }),
    defineField({
      name: "rating",
      type: "number",
      description: "1–5, optional",
      validation: (r) => r.min(1).max(5),
    }),
  ],
  orderings: [
    { title: "Most recently updated", name: "updatedDesc", by: [{ field: "_updatedAt", direction: "desc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "author", status: "status" },
    prepare({ title, subtitle, status }) {
      return { title, subtitle: `${subtitle} · ${status}` };
    },
  },
});
