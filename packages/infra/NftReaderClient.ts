import { createAlchemy, Network } from 'alchemy';
import { NftClient } from 'domains/nft';

export function NftReaderClient(network: Network): NftClient {
  const api = createAlchemy(network);
  return {
    getWalletNfts: async (address) => {
      const result = await api.nft.getNftsForOwner(address);
      return result.ownedNfts;
    },
  };
}
