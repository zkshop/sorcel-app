import type { Gate, GetProductsQuery } from '@3shop/apollo';
import type { FormatedProductData } from '@3shop/ui-tbw';
import { getExternalLink } from './getExternalLink';
import { getTargetAttribute } from './getTargetAttribute';

type Product = GetProductsQuery['products'][0];

export type GetProductCardPropsParams = {
  product: Product;
  userNFTContracts: string[];
  userMatchedProductGate: Gate | null;
  isLockedByGate: boolean;
};

const CONFIG_TBW_HIGHLIGHTED_PRODUCT_ID = 'ebb24d16-6b6f-464b-bb54-897482b4bc67';
const NFT_PARIS_LINK_50_PRODUCT_ID = '9b274f32-a5d8-41a2-b6d1-1f5042563967';

export const formatProductData = ({
  product,
  userNFTContracts,
  userMatchedProductGate,
  isLockedByGate,
}: GetProductCardPropsParams): FormatedProductData => {
  const { id, price } = product;
  const discount = 0;
  const curation = '0xe7c96dbdef402eac651ede6330f46fbbdd97f175';
  const isDiscountGated = true;
  const isAnNftHolder = Boolean(curation && userNFTContracts.includes(curation.toLowerCase()));

  const discountInPercent = discount ? discount / 100 : 0;
  const priceReduced = discount ? price - price * discountInPercent : 0;

  const highlight = id === CONFIG_TBW_HIGHLIGHTED_PRODUCT_ID;
  const isNFTParisModal = id === NFT_PARIS_LINK_50_PRODUCT_ID && isAnNftHolder;
  const externalLink = getExternalLink(id, userMatchedProductGate, isAnNftHolder, !!curation);

  const isLocked = (!externalLink && !isNFTParisModal) || isLockedByGate;

  const targetAttribute = getTargetAttribute(id);

  if (typeof window !== 'undefined') {
    setTimeout(() => {
      window?.MemberStack?.reload();
    }, 500);
  }

  const showDiscount = (() => {
    if (discount) {
      if (isDiscountGated) {
        return isAnNftHolder;
      }
      return true;
    }
    return false;
  })();

  const formatedProductData = {
    ...product,
    discount: (showDiscount && discount) || 0,
    priceReduced,
    isNFTParisModal,
    highlight,
    isLocked,
    externalLink,
    targetAttribute,
  };

  return formatedProductData;
};
