import { defineType, defineField } from 'sanity';

export const shopPageSchema = defineType({
  name: 'shopPage', // Unique name for the schema
  title: 'Shop Page', // Display title in the studio
  type: 'document', // Defines this as a document type
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the shop page',
    }),
    defineField({
      name: 'brands',
      title: 'Brands',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'brand' }], // References to the 'brand' document type
        },
      ],
      description: 'Select the brands to display on the shop page',
    }),
  ],
});
