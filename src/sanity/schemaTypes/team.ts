import { defineType } from "sanity";

export const team = defineType({
  name: "team",  // Schema name should generally be lowercase
  title: "Team",  // Title should reflect the schema name
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) => rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (rule) => rule.required(),
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [{ type: "url" }],
    },
  ],
});
