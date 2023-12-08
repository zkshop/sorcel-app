import type { Nft } from '@3shop/alchemy';

export const isHolder = (nfts: Nft[], contractAddress: string) => {
  for (const nft of nfts) {
    if (nft.contract.address.toLocaleUpperCase() === contractAddress.toLocaleUpperCase())
      return true;
  }

  return false;
};
