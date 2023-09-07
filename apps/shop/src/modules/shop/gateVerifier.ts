import type { Nft } from '@3shop/alchemy';

import type { ShopGate_v2 } from './ProductListContainer';
import { every, includes } from 'lodash';
import type { GateFieldsFragment } from '@3shop/apollo';
import { Segment_Type_Enum } from '@3shop/apollo';

// const isNftMatchingWithGate = (gate: ShopGate_v2, nft: Nft): boolean => {
//   if (!nft.rawMetadata || !nft.rawMetadata.attributes) return false;

//   for (const gateAttribute of gate.attributes) {
//     const nftAttribute = nft.rawMetadata.attributes.find(
//       (attribute: any) => attribute.trait_type === gateAttribute.name,
//     );

//     if (!nftAttribute || nftAttribute.value !== gateAttribute.value) {
//       return false;
//     }
//   }

//   return true;
// };

const isPoapsMatchingOneSegment = (poapIds: number[], segment: ShopGate_v2['segments'][0]) =>
  every(segment.poap_ids, (id) => includes(poapIds, Number(id)));

const isNFTMatchingOneSegment = (address: string, segments: ShopGate_v2['segments']) =>
  segments.some((segment) => segment.nft_contract_address?.toLowerCase() === address.toLowerCase());

const isMatchingGate = (gate: ShopGate_v2, nfts: Nft[], poaps: number[]): boolean => {
  const nftsWithSameSmartContract = nfts.filter((nft) =>
    isNFTMatchingOneSegment(nft.contract.address, gate.segments),
  );

  const poapGates = gate.segments.filter((segment) => segment.type === Segment_Type_Enum.Poap);
  const isPoapMatching = poapGates.some((poapGate) => isPoapsMatchingOneSegment(poaps, poapGate));

  if (!nftsWithSameSmartContract.length && !isPoapMatching) return false;

  /* for nft attributes */
  /* for (const nft of nftsWithSameSmartContract) {
     if (isNftMatchingWithGate(gate, nft)) return true;
   } */

  return true;
};

export const gateVerifier = (
  gates: GateFieldsFragment[],
  nfts: Nft[],
  userPoapIds: number[],
): GateFieldsFragment[] => {
  const match = gates.filter((gate) => isMatchingGate(gate, nfts, userPoapIds));

  return match;
};
