import { defineField, defineType } from "sanity";

export const like = defineType({
  name: "like",
  title: "Liked",
  type: "document",
  description: "Single-line interests, shown as a flowing list on the home page",
  fields: [
    defineField({ name: "label", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "order",
      type: "number",
      description: "Lower number = shown earlier",
      initialValue: 100,
    }),
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "label" } },
});
