import { SchemaTypeDefinition } from 'sanity';
import { productSchema  } from './product';
import shipment from './shipment';
import order from './order';
import { categorySchema } from '@/sanity/schemaTypes/category';  // Corrected named import
import { team } from '@/sanity/schemaTypes/team';  // Named import here
import { editorChoice } from '@/sanity/schemaTypes/editorchoice';  // Named import here
import { shopPageSchema} from '@/sanity/schemaTypes/Shop';  // Named import here

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema , categorySchema, order, shipment, team, editorChoice,shopPageSchema ],  // use 'team' instead of 'Team'
};
