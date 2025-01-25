import { defineType, defineField } from 'sanity';

export const brandSchema = defineType({
  name: 'brand', // The name used to reference this type
  title: 'Brand', // Display name in the Sanity Studio
  type: 'document', // Defines this as a document type
  fields: [
    defineField({
      name: 'name',
      title: 'Brand Name',
      type: 'string',
      description: 'The name of the brand',
    }),
    defineField({
      name: 'logo',
      title: 'Brand Logo',
      type: 'image',
      description: 'Upload the brand logo',
    }),
  ],
});
