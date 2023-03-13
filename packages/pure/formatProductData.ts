import { getPoapImageFromPoapList } from '@3shop/poap';
import type { Gate, GetProductsQuery } from '@3shop/apollo';
import type { FormatedProductData } from '@3shop/types';

type Product = GetProductsQuery['products'][0];

export type GetProductCardPropsParams = {
  product: Product;
  productGates: Gate[];
  userPoapIds: number[];
  userNFTContracts: string[];
  userMatchedProductGate: Gate | null;
  poapImageList: string[];
};

export const formatProductData = ({
  product,
  productGates,
  userPoapIds,
  userNFTContracts,
  userMatchedProductGate,
  poapImageList,
}: GetProductCardPropsParams): FormatedProductData => {
  const { price, discount, isDiscountGated, curation, poapId } = product;

  const isPoapGated = !!poapId;
  const isNFTGated = !!curation;
  const isGatedByNFTAttributes = !!productGates?.length;
  const isGated = isPoapGated || isNFTGated || isGatedByNFTAttributes;

  const isPoapHolder = isPoapGated && userPoapIds.includes(poapId);
  const isNFTHolder = isNFTGated && userNFTContracts.includes(curation.toLowerCase());
  const isAnHolder = isNFTHolder || isPoapHolder;

  const isLocked = isGated && !isAnHolder && !isDiscountGated && !userMatchedProductGate;

  const discountToApply = userMatchedProductGate?.discount || discount || 0;
  const discountInPercent = discountToApply / 100;
  const priceReduced = discountToApply ? price - price * discountInPercent : 0;

  const poapImgUrl = getPoapImageFromPoapList(poapImageList, poapId);

  const showDiscount = (() => {
    if (userMatchedProductGate?.discount || discount) {
      if (isDiscountGated) {
        return isAnHolder;
      }
      return true;
    }
    return false;
  })();

  const formatedProductData = {
    ...product,
    discount: (showDiscount && (userMatchedProductGate?.discount || discount)) || 0,
    priceReduced,
    poapImgUrl,
    isLocked,
  };

  return formatedProductData;
};
