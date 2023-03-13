import type { Gate, GetProductsQuery } from '@3shop/apollo';
import type { FormatedProductData } from '@3shop/types';
import { getExternalLink } from './getExternalLink';
import { getTargetAttribute } from './getTargetAttribute';

type Product = GetProductsQuery['products'][0];

export type GetProductCardPropsParams = {
  product: Product;
  productGates: Gate[];
  userNFTContracts: string[];
  userMatchedProductGate: Gate | null;
};

export const formatProductData = ({
  product,
  productGates,
  userNFTContracts,
  userMatchedProductGate,
}: GetProductCardPropsParams): FormatedProductData => {
  const { id, price, discount, isDiscountGated, curation } = product;

  const isNFTGated = !!curation;
  const isGatedByNFTAttributes = !!productGates?.length;
  const isGated = isNFTGated || isGatedByNFTAttributes;

  const isNFTHolder = isNFTGated && userNFTContracts.includes(curation.toLowerCase());

  const isLocked = isGated && !isNFTHolder && !isDiscountGated && !userMatchedProductGate;

  const discountInPercent = discount ? discount / 100 : 0;
  const priceReduced = discount ? price - price * discountInPercent : 0;

  const externalLink = getExternalLink(id, userMatchedProductGate, isNFTHolder, !!curation);

  const targetAttribute = getTargetAttribute(id);

  if (typeof window !== 'undefined') {
    setTimeout(() => {
      window?.MemberStack?.reload();
    }, 500);
  }

  const showDiscount = (() => {
    if (discount) {
      if (isDiscountGated) {
        return isNFTHolder;
      }
      return true;
    }
    return false;
  })();

  const formatedProductData = {
    ...product,
    discount: (showDiscount && discount) || 0,
    priceReduced,
    isLocked,
    externalLink,
    targetAttribute,
  };

  return formatedProductData;
};
