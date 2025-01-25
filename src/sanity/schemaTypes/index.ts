import { SchemaTypeDefinition } from 'sanity';
import { productSchema } from '@/sanity/schemaTypes/product'; 
import { categorySchema } from '@/sanity/schemaTypes/category';
import { teamSchema } from '@/sanity/schemaTypes/team';
import { shopPageSchema } from '@/sanity/schemaTypes/Shop'; 
import { shipmentSchema } from './shipment';
import { orderSchema } from './order';
import { brandSchema } from './brand';
import { editorChoiceSchema } from '@/sanity/schemaTypes/editorChoice';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    productSchema,
    categorySchema,
    orderSchema,
    shipmentSchema,
    teamSchema,
    brandSchema,
    shopPageSchema,
    editorChoiceSchema,
  ],
};
