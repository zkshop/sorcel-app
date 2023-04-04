import { createAlchemy } from '@3shop/alchemy';
import type { NftClient } from '@3shop/domains';

export function NftReaderClient(): NftClient {
  const api = createAlchemy();
  return {
    getWalletNfts: async (walletAddress) => {
      const result = await api.nft.getNftsForOwner(walletAddress);
      return result.ownedNfts;
    },
    getNftAttribute: async () => [],
  };
}
