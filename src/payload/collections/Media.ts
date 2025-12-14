import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: "media",
    mimeTypes: ["image/*"],
  },
  access: {
    read: () => true, // Allow public read access
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};
