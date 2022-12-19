import { getPoapImageFromPoapList } from 'poap';
import type { Product } from 'apollo';
import type { FormatedProductData } from 'types';

export type GetProductCardPropsParams = Product & {
  poapImageList: any[];
  poapIds: number[];
  collections: string[];
};

export const formatProductData = ({
  image,
  name,
  discount,
  description,
  price,
  collection,
  curation,
  id,
  isDiscountGated,
  poapId,
  poapImageList,
  collections,
  poapIds,
}: GetProductCardPropsParams): FormatedProductData => {
  const isGated = Boolean(curation || poapId);
  const isAPoapHolder = poapId ? poapIds.includes(poapId) : false;
  const isAnNftHolder = curation ? collections.includes(curation.toLowerCase()) : false;
  const isAnHolder = isAnNftHolder || isAPoapHolder;
  const isTransparent = isGated && !isAnHolder && !isDiscountGated;
  const poapUrl = `https://poap.gallery/event/${poapId}`;
  const poapImgUrl = getPoapImageFromPoapList(poapImageList, poapId);

  const discountNumber = discount || 0;
  const promoPercent = discount ? discountNumber / 100 : 0;
  const priceReduced = discount ? price - price * promoPercent : 0;

  const showDiscount = (() => {
    if (discount) {
      if (isDiscountGated) {
        return isAnHolder;
      }
      return true;
    }
    return false;
  })();

  return {
    isAnHolder,
    isTransparent,
    poapUrl,
    poapImgUrl,
    srcItem: image,
    title: name,
    discount: (showDiscount && discount) || 0,
    description,
    price,
    priceReduced,
    collection,
    id,
  };
};
