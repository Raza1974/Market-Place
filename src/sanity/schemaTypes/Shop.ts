import { defineType } from 'sanity';

// Product schema (Ensure this is the only definition of `product`)
export const productSchema = defineType({
  name: 'product', // Name of the schema
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      title: 'Product Image',
      type: 'image',
      validation: (rule) => rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (rule) => rule.required(),
    },
    {
      name: 'salePrice',
      title: 'Sale Price',
      type: 'number',
    },
    {
      name: 'colors',
      title: 'Available Colors',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
  ],
});

// Category schema
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

// Brand schema
export const brandSchema = defineType({
  name: 'brand',
  title: 'Brand',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Brand Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'logo',
      title: 'Brand Logo',
      type: 'image',
      validation: (rule) => rule.required(),
    },
    {
      name: 'aspectRatio',
      title: 'Aspect Ratio',
      type: 'string',
      description: 'Aspect ratio of the logo (width x height)',
    },
  ],
});

// ShopPage schema with references to products, categories, and brands
export const shopPageSchema = defineType({
  name: 'shopPage',
  title: 'Shop Page',
  type: 'document',
  fields: [
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    },
    {
      name: 'brands',
      title: 'Brands',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'brand' }] }],
    },
  ],
});
