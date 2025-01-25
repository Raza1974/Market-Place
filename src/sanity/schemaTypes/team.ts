import { defineType } from 'sanity';

export const teamSchema = defineType({
  name: 'team',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      validation: (rule) => rule.required(),
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
          ],
        },
      ],
    },
  ],
});
