import { createAlchemy } from '@3shop/alchemy';
import type { NFT, BlockchainClient } from '@3shop/domains';

export function NftReaderClient(): BlockchainClient {
  const api = createAlchemy();
  return {
    getWalletNfts: async (walletAddress) => {
      const result = await api.nft.getNftsForOwner(walletAddress);
      return result.ownedNfts as NFT[];
    },

    getNftAttribute: async (smartContractAddress) => {
      void smartContractAddress;
      return [];
    },
  };
}
