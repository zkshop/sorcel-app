export type AddProductFormValues = {
  price: string;
  description: string;
  image: File;
  name: string;
  isModal: boolean;
};

export type EditProductFormValues = {
  price: string;
  description: string;
  image: File | string;
  name: string;
};
