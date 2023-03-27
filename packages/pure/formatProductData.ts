import { getPoapImageFromPoapList, getPoapURLFromId } from '@3shop/poap';
import type { GetGates_V2_ByAppIdQuery, GetProductsQuery } from '@3shop/apollo';
import type { FormatedProductData } from '@3shop/types';
import { applyDiscount } from './applyDiscount';

type Product = GetProductsQuery['products'][0];
type ShopGate_v2 = GetGates_V2_ByAppIdQuery['gates'][0];

export type GetProductCardPropsParams = {
  product: Product;
  productGates: ShopGate_v2[];
  userPoapIds: number[];
  userNFTContracts: string[];
  userMatchedProductGate: ShopGate_v2 | null;
  poapImageList: string[];
};

export const formatProductData = ({
  product,
  productGates,
  userMatchedProductGate,
  poapImageList,
}: GetProductCardPropsParams): FormatedProductData => {
  const { price, poapId } = product;

  const isGated = productGates.length > 0 && productGates[0].exclusive_access;

  const discountToApply = userMatchedProductGate?.discount;
  const priceReduced = applyDiscount(price, discountToApply || 0);

  const poapUrl = getPoapURLFromId(poapId as number);
  const poapImgUrl = getPoapImageFromPoapList(poapImageList, poapId);
  const isLocked = isGated && !userMatchedProductGate;

  const formatedProductData = {
    ...product,
    discount: userMatchedProductGate?.discount || 0,
    priceReduced,
    poapUrl,
    poapImgUrl,
    isLocked,
  };

  return formatedProductData;
};
