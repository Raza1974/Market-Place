import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'shipment',
  title: 'Shipment',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'reference',
      to: [{ type: 'order' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'trackingNumber',
      title: 'Tracking Number',
      type: 'string',
    }),
    defineField({
      name: 'carrier',
      title: 'Carrier',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Processing', value: 'processing' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Delivered', value: 'delivered' },
        ],
      },
    }),
    defineField({
      name: 'estimatedDeliveryDate',
      title: 'Estimated Delivery Date',
      type: 'date',
    }),
    defineField({
      name: 'actualDeliveryDate',
      title: 'Actual Delivery Date',
      type: 'date',
    }),
  ],
})

