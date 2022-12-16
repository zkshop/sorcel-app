import type { Nullable } from '@3shop/types';

export type AddProductFormValues = {
  price: string;
  description: string;
  discount: Nullable<string>;
  image: string;
  curation: Nullable<string>;
  poapId: Nullable<string>;
  collection: string;
  name: string;
  isDiscountGated: boolean;
};
