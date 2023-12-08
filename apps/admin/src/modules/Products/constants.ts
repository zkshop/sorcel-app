export const PRODUCTS_FIELDS = {
  image: {
    name: 'image',
    label: 'Image',
  },
  name: {
    name: 'name',
    label: 'Name',
  },
  description: {
    name: 'description',
    label: 'Description',
  },
  price: {
    name: 'price',
    label: 'Price',
  },
  webhookUrl: {
    name: 'webhookUrl',
    label: 'Webhook URL',
  },
} as const;

export const PRODUCT_ATTRIBUTES = ['Image', 'Name', 'Type', 'Price'];
