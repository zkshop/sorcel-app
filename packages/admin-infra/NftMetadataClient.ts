import { createAlchemy } from '@3shop/alchemy';
import type { NFT, NftClient } from '@3shop/domains/nft';
import { createAttributeListFromNftMetadata } from '@3shop/pure';

export function NftMetadataClient(): NftClient {
  const api = createAlchemy();
  return {
    getWalletNfts: async (walletAddress) => {
      const result = await api.nft.getNftsForOwner(walletAddress);
      return result.ownedNfts as NFT[];
    },
    getNftAttribute: async (smartContractAddress) => {
      const result = await api.nft.getNftsForContract(smartContractAddress);
      return createAttributeListFromNftMetadata(result.nfts as NFT[]);
    },
  };
}
