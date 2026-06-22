import { defineField, defineType } from "sanity";

export const about = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "initial", type: "string", description: "Single letter for avatar", validation: (r) => r.required().max(2) }),
    defineField({ name: "tagline", type: "string", description: "e.g. backend engineer · runner · reader" }),
    defineField({
      name: "intro",
      type: "array",
      of: [{ type: "block" }],
      description: "Short hero paragraph",
    }),
    defineField({ name: "email", type: "string" }),
    defineField({
      name: "socials",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "label", type: "string" },
          { name: "href", type: "url" },
        ],
      }],
    }),
    defineField({
      name: "longBio",
      type: "array",
      of: [{ type: "block" }],
      description: "Longer text for the /about page",
    }),
  ],
  preview: { select: { title: "name" } },
});
