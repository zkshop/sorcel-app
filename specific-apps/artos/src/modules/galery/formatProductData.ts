import type { Product } from 'apollo';
import type { FormatedProductData } from 'ui-tbw';

export type GetProductCardPropsParams = Product & {
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
  collections,
}: GetProductCardPropsParams): FormatedProductData => {
  const isGated = curation;
  const isAnNftHolder = collections.includes(curation?.toLowerCase());
  const isTransparent = isGated && !isAnNftHolder && !isDiscountGated;
  const priceNumber = parseInt(price);
  const discountNumber = discount ? parseInt(discount) : 0;
  const promoPercent = discount ? discountNumber / 100 : 0;
  const priceReduced = discount ? priceNumber - priceNumber * promoPercent : 0;

  const showDiscount = (() => {
    if (discount) {
      if (isDiscountGated) {
        return isAnNftHolder;
      }
      return true;
    }
    return false;
  })();

  const isLocked = true;
  const targetAttribute = '_self';

  return {
    isWithHref: false,
    isLocked,
    highlight: false,
    externalLink: '',
    targetAttribute,
    isAnHolder: isAnNftHolder,
    isTransparent,
    srcItem: image,
    title: name,
    discount: showDiscount && discount,
    description,
    price,
    priceReduced,
    collection,
    id,
  };
};
