import { defineType } from 'sanity';

export const shipmentSchema = defineType({
  name: 'shipment',
  title: 'Shipment',
  type: 'document',
  fields: [
    {
      name: 'shipmentId',
      title: 'Shipment ID',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'orderId',
      title: 'Order ID',
      type: 'reference',
      to: [{ type: 'order' }],
      validation: (rule) => rule.required(),
    },
    {
      name: 'carrier',
      title: 'Carrier',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'trackingNumber',
      title: 'Tracking Number',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'status',
      title: 'Shipping Status',
      type: 'string',
      options: {
        list: ['In Transit', 'Delivered', 'Returned', 'Cancelled'],
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'estimatedDelivery',
      title: 'Estimated Delivery Date',
      type: 'datetime',
    },
  ],
});
