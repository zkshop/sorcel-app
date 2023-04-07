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
  poapImgList?: string[];
  externalLink?: string;
  isLocked?: boolean;
  isAnHolder?: boolean;
  isWithHref?: boolean;
};
