import type { Product } from '@3shop/apollo';
import type { FormatedProductData } from '@3shop/ui-tbw';

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
  const isAnNftHolder = Boolean(curation && collections.includes(curation.toLowerCase()));
  const isTransparent = Boolean(curation && !isAnNftHolder && !isDiscountGated);
  const discountNumber = discount ? discount : 0;
  const promoPercent = discount ? discountNumber / 100 : 0;
  const priceReduced = discount ? price - price * promoPercent : 0;

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
    discount: (showDiscount && discount) || 0,
    description,
    price,
    priceReduced,
    collection,
    id,
  };
};
