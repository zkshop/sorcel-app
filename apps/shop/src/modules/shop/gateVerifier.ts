import type { Nft } from '@3shop/alchemy';
import type { Gate } from '@3shop/apollo';

const isNftMatchingWithGate = (gate: Gate, nft: Nft): boolean => {
  if (!nft.rawMetadata || !nft.rawMetadata.attributes) return false;

  for (const gateAttribute of gate.attributes) {
    const nftAttribute = nft.rawMetadata.attributes.find(
      (attribute: any) => attribute.trait_type === gateAttribute.name,
    );

    if (!nftAttribute || nftAttribute.value !== gateAttribute.value) {
      return false;
    }
  }

  return true;
};

const isMatchingGate = (gate: Gate, nfts: Nft[]): boolean => {
  const nftsWithSameSmartContract = nfts.filter(
    (nft) => nft.contract.address.toLowerCase() === gate.contractAddress.toLowerCase(),
  );

  if (!nftsWithSameSmartContract.length) return false;

  for (const nft of nftsWithSameSmartContract) {
    if (isNftMatchingWithGate(gate, nft)) return true;
  }

  return false;
};

export const gateVerifier = (gates: Gate[], nfts: Nft[]): Gate | null => {
  const match = gates.filter((gate) => isMatchingGate(gate, nfts));

  return match.length ? match[0] : null;
};
