import { defineType } from 'sanity';

export const orderSchema = defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'orderId',
      title: 'Order ID',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'email',
      title: 'Customer Email',
      type: 'string',
      validation: (rule) => rule.required().email(),
    },
    {
      name: 'products',
      title: 'Ordered Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    },
    {
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    },
    {
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime',
      validation: (rule) => rule.required(),
    },
  ],
});
