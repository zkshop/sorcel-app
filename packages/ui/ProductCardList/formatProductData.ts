import { ProductCardProps } from 'ui';
import { getPoapImageFromPoapList } from 'pure';
import { GetProductCardPropsParams } from './ProductCardList';

export const formatProductData = ({
  image,
  name,
  discount,
  price,
  collection,
  curation,
  id,
  poapId,
  poapImageList,
  collections,
  poapIds,
}: GetProductCardPropsParams): ProductCardProps => {
  const isGated = curation || poapId;
  const isAPoapHolder = poapIds.includes(poapId);
  const isAnNftHolder = collections.includes(curation?.toLowerCase());
  const isAnHolder = isAnNftHolder || isAPoapHolder;
  const isTransparent = isGated && !isAnHolder;
  const poapImgUrl = getPoapImageFromPoapList(poapId, poapImageList);

  const showDiscount = (() => {
    if (discount) {
      if (isGated) {
        return isAnHolder;
      }
      return true;
    }
    return false;
  })();

  return {
    isAnHolder,
    isTransparent,
    poapImgUrl,
    srcItem: image,
    title: name,
    discount: showDiscount && discount,
    price,
    collection,
    id,
  };
};
