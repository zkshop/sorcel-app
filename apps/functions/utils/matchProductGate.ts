import type { Nft } from '@3shop/alchemy';

import type { GateFieldsFragment } from '@3shop/apollo';

// const isNftMatchingWithGate = (gate: GateFieldsFragment, nft: Nft): boolean => {
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

const isNFTMatchingOneSegment = (address: string, segments: GateFieldsFragment['segments']) =>
  segments.some((segment) => segment.nft_contract_address?.toLowerCase() === address.toLowerCase());

const isMatchingGate = (gate: GateFieldsFragment, nfts: Nft[]): boolean => {
  const nftsWithSameSmartContract = nfts.filter((nft) =>
    isNFTMatchingOneSegment(nft.contract.address, gate.segments),
  );

  if (!nftsWithSameSmartContract.length) return false;

  /* for nft attributes */
  /* for (const nft of nftsWithSameSmartContract) {
     if (isNftMatchingWithGate(gate, nft)) return true;
   } */

  return true;
};

export const gateVerifier = (gates: GateFieldsFragment[], nfts: Nft[]): GateFieldsFragment[] => {
  const match = gates.filter((gate) => isMatchingGate(gate, nfts));

  return match;
};
