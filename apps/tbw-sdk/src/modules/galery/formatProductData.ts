import { Gate, Product } from 'apollo';
import { FormatedProductData } from 'ui-tbw';
import { getExternalLink } from './getExternalLink';
import { getTargetAttribute } from './getTargetAttribute';

export type GetProductCardPropsParams = Product & {
  collections: string[];
  gate: Gate | null;
};

const HIGHLIGHTED_PRODUCT_ID = 'ebb24d16-6b6f-464b-bb54-897482b4bc67';

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
  gate,
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

  const highlight = id === HIGHLIGHTED_PRODUCT_ID;
  const externalLink = getExternalLink(id, gate, isAnNftHolder);
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      window?.MemberStack?.reload();
    }, 500);
  }
  const isLocked = !externalLink;
  const targetAttribute = getTargetAttribute(id);

  return {
    isLocked,
    highlight,
    externalLink,
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
