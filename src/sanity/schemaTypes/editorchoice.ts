import { defineType } from 'sanity';

export const editorChoiceSchema = defineType({
  name: 'editorChoice',
  title: 'Editor Choice',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'featuredProducts',
      title: 'Featured Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    },
    {
      name: 'priority',
      title: 'Priority',
      type: 'number',
      description: 'Set the display priority for the editor choice item',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
});
