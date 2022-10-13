import { createAlchemy, Network } from 'alchemy';
import { WalletScrapperClient } from 'domains/walletScrapper';

export function NftScrapperClient(network: Network): WalletScrapperClient {
  const api = createAlchemy(network);
  return {
    getWalletNfts: async (address) => {
      const result = await api.nft.getNftsForOwner(address);
      return result.ownedNfts;
    },
  };
}
