import { getPoapImageFromPoapList } from '@3shop/poap';
import type { Gate, Product } from '@3shop/apollo';
import type { FormatedProductData } from '@3shop/types';

export type GetProductCardPropsParams = Product & {
  poapImageList: string[];
  poapIds: number[];
  collections: string[];
  activeGate: Gate | null;
  gates: Gate[];
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
  activeGate,
  gates,
}: GetProductCardPropsParams): FormatedProductData => {
  const isGated = Boolean(curation || poapId || gates.length);
  const isAPoapHolder = poapId ? poapIds.includes(poapId) : false;
  const isAnNftHolder = curation ? collections.includes(curation.toLowerCase()) : false;
  const isAnHolder = isAnNftHolder || isAPoapHolder;
  const isLocked = isGated && !isAnHolder && !isDiscountGated && !activeGate;
  const poapUrl = `https://poap.gallery/event/${poapId}`;
  const poapImgUrl = getPoapImageFromPoapList(poapImageList, poapId);

  const discountNumber = activeGate?.discount || discount || 0;
  const promoPercent = discountNumber / 100;
  const priceReduced = discountNumber ? price - price * promoPercent : 0;

  const showDiscount = (() => {
    if (activeGate?.discount || discount) {
      if (isDiscountGated) {
        return isAnHolder;
      }
      return true;
    }
    return false;
  })();

  return {
    isAnHolder,
    isLocked,
    poapUrl,
    poapImgUrl,
    srcItem: image,
    title: name,
    discount: (showDiscount && (activeGate?.discount || discount)) || 0,
    description,
    price,
    priceReduced,
    collection,
    id,
  };
};
