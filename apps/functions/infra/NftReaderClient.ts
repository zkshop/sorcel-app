import { NftFilters, createAlchemy } from '@3shop/alchemy';
import type { NFT, BlockchainClient } from '@3shop/domains';

export function NftReaderClient(): BlockchainClient {
  const api = createAlchemy('ETHEREUM');
  return {
    getWalletNfts: async (walletAddress, contractAddresses) => {
      const result = await api.nft.getNftsForOwner(walletAddress, {
        contractAddresses,
        excludeFilters: [NftFilters.SPAM, NftFilters.AIRDROPS],
      });
      return result.ownedNfts as NFT[];
    },

    getNftAttribute: async (smartContractAddress) => {
      void smartContractAddress;
      return [];
    },
  };
}
