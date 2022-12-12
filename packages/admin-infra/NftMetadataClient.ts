import type { Network } from 'alchemy';
import { createAlchemy } from 'alchemy';
import type { NftClient } from 'domains/nft';
import { createAttributeListFromNftMetadata } from 'pure';

export function NftMetadataClient(network: Network): NftClient {
  const api = createAlchemy(network);
  return {
    getWalletNfts: async (walletAddress) => {
      const result = await api.nft.getNftsForOwner(walletAddress);
      return result.ownedNfts;
    },
    getNftAttribute: async (smartContractAddress) => {
      const result = await api.nft.getNftsForContract(smartContractAddress);
      return createAttributeListFromNftMetadata(result.nfts);
    },
  };
}
