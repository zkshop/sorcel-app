import { UseToastOptions } from '@chakra-ui/react';

export const getEditProductSuccessMessage = (productName: string): UseToastOptions => ({
  title: 'Product Edited',
  description: `${productName} has been edited successfully.`,
  status: 'success',
  duration: 3000,
});

export const getDeleteProductSuccessMessage = (productName: string): UseToastOptions => ({
  title: 'Product Deleted',
  description: `${productName} has been deleted successfully.`,
  status: 'success',
  duration: 3000,
});

export const getAddProductSuccessMessage = (productName: string): UseToastOptions => ({
  title: 'Product Created',
  description: `${productName} has been created successfully.`,
  status: 'success',
  duration: 3000,
});
