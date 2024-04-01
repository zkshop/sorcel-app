import { envVars } from '@/envVars';
import type { Alchemy } from '@3shop/alchemy';
import { NftFilters, createAlchemy } from '@3shop/alchemy';
import type { NFT, BlockchainClient } from '@3shop/domains/nft';
import { createAttributeListFromNftMetadata } from '@3shop/pure';

const getEveryNftForContract = async (
  api: Alchemy,
  smartContractAddress: string,
  pageKey?: string,
): Promise<NFT[]> => {
  const result = await api.nft.getNftsForContract(smartContractAddress, {
    pageSize: 100,
    pageKey,
  });

  const nfts = result.nfts as NFT[];

  if (result.pageKey)
    return nfts.concat(await getEveryNftForContract(api, smartContractAddress, result.pageKey));
  return nfts;
};

export function NftReaderClient(): BlockchainClient {
  console.log("#br0", envVars.NETWORK);
  const api = createAlchemy();
  console.log("#br1", api, envVars.NETWORK);
  return {
  getWalletNfts: async (walletAddress, contractAddresses) => {
      const result = await api.nft.getNftsForOwner(walletAddress, {
        contractAddresses,
        excludeFilters: [NftFilters.SPAM, NftFilters.AIRDROPS],
      });
      return result.ownedNfts as NFT[];
    },

    getNftAttribute: async (smartContractAddress) => {
      const nfts = await getEveryNftForContract(api, smartContractAddress);

      return createAttributeListFromNftMetadata(nfts as NFT[]);
    },
  };
}
