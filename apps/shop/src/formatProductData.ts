import { getPoapImageFromPoapList } from '@3shop/poap';
import type { GetGates_V2_ByAppIdQuery, GetProductsQuery } from '@3shop/apollo';
import { Segment_Type_Enum } from '@3shop/apollo';
import type { FormatedProductData } from '@3shop/types';
import { applyDiscount } from '@3shop/pure/applyDiscount';
import { useAccount } from '@3shop/wallet';
import { useAppSelector } from '@3shop/store';
import { get } from 'lodash';

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
  const { address } = useAccount();
  const email = useAppSelector((state) => state.user.auth.email);

  const { price } = product;

  const isGated = productGates.length > 0 && productGates[0].exclusive_access;

  const discountToApply = userMatchedProductGate?.discount;
  const priceReduced = applyDiscount(price, discountToApply || 0);

  const filteredProductGates = productGates.filter(
    (gate) => get(gate, 'segments[0].type') === Segment_Type_Enum.Poap,
  );

  const poapIds = filteredProductGates?.[0]?.segments?.[0]?.poap_ids;

  const poapImgListToDisplay = poapIds?.map((poapId: string) => ({
    id: poapId,
    url: getPoapImageFromPoapList(poapImageList, Number(poapId)),
  }));

  const hasAlreadyClaimed =
    !userMatchedProductGate ||
    (userMatchedProductGate.unique_claim &&
      userMatchedProductGate?.claims?.includes(address || email));

  const isLocked = isGated && hasAlreadyClaimed;

  const formatedProductData = {
    ...product,
    discount: userMatchedProductGate?.discount || 0,
    priceReduced,
    poapImgList: poapImgListToDisplay,
    isLocked,
    type: product.type,
    webhookUrl: product.webhookUrl || '',
    gate: productGates[0]
      ? {
          id: productGates[0].id,
          claims: productGates[0].claims,
          contractAddress: productGates[0].segments[0].nft_contract_address || '',
          network: productGates[0].segments[0].network,
        }
      : null,
  };

  return formatedProductData;
};
