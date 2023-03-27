import type { Nft } from '@3shop/alchemy';

import type { ShopGate_v2 } from './ProductListContainer';

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

const isMatchingOneSegment = (address: string, segments: ShopGate_v2['segments']) =>
  segments.some((segment) => segment.nft_contract_address?.toLowerCase() === address.toLowerCase());

const isMatchingGate = (gate: ShopGate_v2, nfts: Nft[]): boolean => {
  const nftsWithSameSmartContract = nfts.filter((nft) =>
    isMatchingOneSegment(nft.contract.address, gate.segments),
  );

  if (!nftsWithSameSmartContract.length) return false;

  /* for nft attributes */
  /* for (const nft of nftsWithSameSmartContract) {
     if (isNftMatchingWithGate(gate, nft)) return true;
   } */

  return true;
};

export const gateVerifier = (gates: ShopGate_v2[], nfts: Nft[]): ShopGate_v2 | null => {
  const match = gates.filter((gate) => isMatchingGate(gate, nfts));

  return match.length ? match[0] : null;
};
