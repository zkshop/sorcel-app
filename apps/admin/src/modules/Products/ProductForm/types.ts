export type AddProductFormValues = {
  price: string;
  description: string;
  image: File;
  name: string;
  isModal: boolean;
  webhookUrl?: string;
};

export type EditProductFormValues = {
  price: string;
  description: string;
  image: File | string;
  name: string;
  isModal: boolean;
  webhookUrl?: string;
};
