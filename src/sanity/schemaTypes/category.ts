import { defineType } from 'sanity';

export const categorySchema = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      title: 'Category Image',
      type: 'image',
      validation: (rule) => rule.required(),
    },
    {
      name: 'itemCount',
      title: 'Item Count',
      type: 'number',
    },
  ],
});
