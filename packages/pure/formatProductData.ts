import { getPoapImageFromPoapList } from 'pure';
import { Product } from 'apollo';
import { FormatedProductData } from 'types';

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
  const isGated = curation || poapId;
  const isAPoapHolder = poapIds.includes(poapId);
  const isAnNftHolder = collections.includes(curation?.toLowerCase());
  const isAnHolder = isAnNftHolder || isAPoapHolder;
  const isTransparent = isGated && !isAnHolder && !isDiscountGated;
  const poapUrl = `https://poap.gallery/event/${poapId}`;
  const poapImgUrl = getPoapImageFromPoapList(poapId, poapImageList);

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
    discount: showDiscount && discount,
    description,
    price,
    collection,
    id,
  };
};
