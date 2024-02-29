import type { GateFieldsFragment, Network_Enum, Product_Type_Enum } from '@3shop/apollo';
import type { Nullable } from './utils';
import type { NFT } from '@3shop/domains';

export type FormatedProductData = {
  id?: string;
  name: string;
  description?: any;
  image: string;
  price: number;
  discount?: number;
  priceReduced?: number;
  collection?: string;
  poapUrl?: string;
  poapImgList?: { id: string; url: string }[];
  externalLink?: string;
  isLocked?: boolean;
  isAnHolder?: boolean;
  isWithHref?: boolean;
  type: Product_Type_Enum;
  webhookUrl?: string;
  gate: Nullable<{
    id: string;
    claims: string[];
    contractAddress: string;
    network?: Network_Enum | null;
  }>[];
};
