import type { Nullable } from 'types';

export type AddProductFormValues = {
  price: number;
  description: string;
  discount: Nullable<number>;
  image: string;
  curation: Nullable<string>;
  poapId: Nullable<number>;
  collection: string;
  name: string;
  isDiscountGated: boolean;
};
