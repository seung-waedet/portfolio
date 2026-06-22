import { defineField, defineType } from "sanity";

export const work = defineType({
  name: "work",
  title: "Work experience",
  type: "document",
  fields: [
    defineField({ name: "company", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", type: "string", validation: (r) => r.required() }),
    defineField({ name: "startDate", type: "date", validation: (r) => r.required() }),
    defineField({
      name: "endDate",
      type: "date",
      description: "Leave blank if current role",
    }),
    defineField({ name: "url", type: "url" }),
    defineField({
      name: "description",
      type: "array",
      of: [{ type: "block" }],
      description: "Optional notes for the /about page",
    }),
  ],
  orderings: [
    { title: "Most recent first", name: "startDesc", by: [{ field: "startDate", direction: "desc" }] },
  ],
  preview: {
    select: { title: "company", subtitle: "role", start: "startDate" },
    prepare({ title, subtitle, start }) {
      const year = start ? new Date(start).getFullYear() : "";
      return { title, subtitle: `${subtitle} · ${year}` };
    },
  },
});
