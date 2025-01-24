import { defineType } from "sanity";

export const editorChoice = defineType({
  name: "editorChoice",  // Change this to match the schema's name, not "product"
  title: "Editor Choice Product",  // You can adjust the title to better describe the schema
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
      type: "string"
    },
    {
      name: "description",
      type: "text",
      validation: (rule) => rule.required(),
      title: "Description",
    },
    {
      name: "productImage",
      type: "image",
      validation: (rule) => rule.required(),
      title: "Product Image"
    },
    {
      name: "price",
      type: "number",
      validation: (rule) => rule.required(),
      title: "Price",
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }]
    },
    {
      name: "discountPercentage",  // Fixed typo here, from "dicountPercentage" to "discountPercentage"
      type: "number",
      title: "Discount Percentage",
    },
    {
      name: "isNew",
      type: "boolean",
      title: "New Badge",
    }
  ]
});
