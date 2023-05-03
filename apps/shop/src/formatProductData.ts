import { getPoapImageFromPoapList } from '@3shop/poap';
import type { GetGates_V2_ByAppIdQuery, GetProductsQuery } from '@3shop/apollo';
import { Segment_Type_Enum } from '@3shop/apollo';
import type { FormatedProductData } from '@3shop/types';
import { applyDiscount } from '@3shop/pure/applyDiscount';

type Product = GetProductsQuery['products'][0];
type ShopGate_v2 = GetGates_V2_ByAppIdQuery['gates'][0];

export type GetProductCardPropsParams = {
  product: Product;
  productGates: ShopGate_v2[];
  userPoapIds: number[];
  userNFTContracts: string[];
  userMatchedProductGate: ShopGate_v2 | null;
  poapImageList: string[];
};

export const formatProductData = ({
  product,
  productGates,
  userMatchedProductGate,
  poapImageList,
}: GetProductCardPropsParams): FormatedProductData => {
  const { price } = product;

  const isGated = productGates.length > 0 && productGates[0].exclusive_access;

  const discountToApply = userMatchedProductGate?.discount;
  const priceReduced = applyDiscount(price, discountToApply || 0);

  const poapIds = productGates.filter(
    (gate) => gate?.segments?.[0]?.type === Segment_Type_Enum.Poap,
  )?.[0]?.segments?.[0]?.poap_ids;

  const poapImgListToDisplay = poapIds?.map((poapId: string) => ({
    id: poapId,
    url: getPoapImageFromPoapList(poapImageList, Number(poapId)),
  }));

  const isLocked = isGated && !userMatchedProductGate;

  const formatedProductData = {
    ...product,
    discount: userMatchedProductGate?.discount || 0,
    priceReduced,
    poapImgList: poapImgListToDisplay,
    isLocked,
  };

  return formatedProductData;
};
