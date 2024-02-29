import type { NFT } from '@3shop/domains';

export const isHolder = (nfts: NFT[], contractAddress: string) => {
  for (const nft of nfts) {
    if (nft.contract.address.toLocaleUpperCase() === contractAddress.toLocaleUpperCase())
      return true;
  }

  return false;
};
