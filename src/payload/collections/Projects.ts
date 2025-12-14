import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "status", "updatedAt"],
  },
  access: {
    read: () => true, // Allow public read access
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description: "URL-friendly version of the title",
      },
    },
    {
      name: "tagline",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "richText",
      required: true,
    },
    {
      name: "status",
      type: "select",
      required: true,
      options: [
        { label: "Live", value: "live" },
        { label: "In Development", value: "dev" },
        { label: "Archived", value: "archived" },
      ],
      defaultValue: "live",
    },
    {
      name: "tech",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "apiEndpoint",
      type: "text",
      admin: {
        description: "Live API URL",
      },
    },
    {
      name: "swaggerUrl",
      type: "text",
      admin: {
        description: "OpenAPI/Swagger documentation URL",
      },
    },
    {
      name: "githubUrl",
      type: "text",
    },
    {
      name: "liveUrl",
      type: "text",
    },
    {
      name: "architecture",
      type: "textarea",
      admin: {
        description: "Mermaid diagram code or architecture description",
      },
    },
    {
      name: "challenges",
      type: "richText",
    },
    {
      name: "benchmarks",
      type: "array",
      fields: [
        {
          name: "metric",
          type: "text",
          required: true,
        },
        {
          name: "value",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "curlExample",
      type: "code",
      admin: {
        language: "bash",
      },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
    },
  ],
};
