import type { Network } from '@3shop/alchemy';
import { createAlchemy } from '@3shop/alchemy';
import type { NftClient } from '@3shop/domains/nft';
import { createAttributeListFromNftMetadata } from '@3shop/pure';

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
