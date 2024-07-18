import { getPoapImageFromPoapList } from '@3shop/poap';
import type { GateFieldsFragment, GetProductsQuery } from '@3shop/apollo';
import { Segment_Type_Enum } from '@3shop/apollo';
import type { FormatedProductData } from '@3shop/types';
import { applyDiscount } from '@3shop/pure/applyDiscount';
import { useAccount } from '@3shop/wallet';
import { useAppSelector } from '@3shop/store';
import { get } from 'lodash';

type Product = GetProductsQuery['products'][0];

export type GetProductCardPropsParams = {
  product: Product;
  productGates: GateFieldsFragment[];
  userPoapIds: number[];
  isLocked: boolean;
  poapImageList: string[];
};

// const getBestDiscount = (matches: Match[]): number => {
//   if (matches.length === 0) return 0;

//   const discounts = matches.map((match) => match.gate.discount || 0);

//   return Math.max(...discounts);
// };

// const isExclusiveAccess = (gates: GateFieldsFragment[]): boolean => {
//   if (gates.length === 0) return false;

//   for (const gateItem of gates) {
//     if (!gateItem.exclusive_access) {
//       return false;
//     }
//   }

//   return true;
// };

export const hasAlreadyClaimed = (
  gates: GateFieldsFragment[],
  address: `0x${string}` | undefined | (string | undefined),
  email: string | null,
): boolean => {
  if (gates.length === 0) return false;

  for (const gateItem of gates) {
    if (gateItem.unique_claim && gateItem?.claims?.includes(address || email)) return true;
  }

  return false;
};

export const formatProductData = ({
  product,
  productGates,
  isLocked,
  poapImageList,
}: GetProductCardPropsParams): FormatedProductData => {
  const { address } = useAccount();
  const email = useAppSelector((state) => state.user.auth.email);

  const { price } = product;

  // const isGated = isExclusiveAccess(productGates);

  const discountToApply = 0;
  const priceReduced = applyDiscount(price, discountToApply || 0);

  const filteredProductGates = productGates.filter(
    (gate) => get(gate, 'segments[0].type') === Segment_Type_Enum.Poap,
  );

  const poapIds = filteredProductGates?.[0]?.segments?.[0]?.poap_ids;

  const poapImgListToDisplay = poapIds?.map((poapId: string) => ({
    id: poapId,
    url: getPoapImageFromPoapList(poapImageList, Number(poapId)),
  }));

  const alreadyClaimed = hasAlreadyClaimed(productGates, address, email);

  const formatedProductData = {
    ...product,
    discount: discountToApply,
    priceReduced,
    poapImgList: poapImgListToDisplay,
    isLocked: isLocked || alreadyClaimed,
    type: product.type,
    webhookUrl: product.webhookUrl || '',
    gate: productGates.map((gate) => ({
      id: gate.id,
      claims: gate.claims,
      contractAddress: (() => {
        if (
          gate.segments[0]['nft_contract_address'] != undefined &&
          gate.segments[0]['nft_contract_address'] != null
        )
          return gate.segments[0].nft_contract_address;
        return '';
      })(),
      network: gate.segments[0].network,
    })),
  };

  return formatedProductData;
};
