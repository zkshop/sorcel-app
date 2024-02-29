import { createAlchemy } from '@3shop/alchemy';
import type { NFT, BlockchainClient } from '@3shop/domains/nft';
import { createAttributeListFromNftMetadata } from '@3shop/pure';

export function NftMetadataClient(): BlockchainClient {
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
