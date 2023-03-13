import type { GetProductsQuery, Utility_Enum } from '@3shop/apollo';

export type FormatedProductData = {
  id?: string;
  name: string;
  description?: any;
  image: string;
  price: number;
  discount?: number;
  priceReduced?: number;
  collection?: string;
  poapImgUrl?: string;
  externalLink?: string;
  isLocked?: boolean;
  targetAttribute?: string;
  utility: Utility_Enum;
  webhookUrl?: GetProductsQuery['products'][0]['webhookUrl'];
};
