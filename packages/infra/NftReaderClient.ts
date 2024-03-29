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
  const api = createAlchemy();
  return {
    getWalletNfts: async (walletAddress, contractAddresses) => {
      try {
        const result = await api.nft.getNftsForOwner(walletAddress, {
          contractAddresses,
          excludeFilters: [NftFilters.SPAM, NftFilters.AIRDROPS],
        });
        return result.ownedNfts as NFT[];
      } catch (e) {
        console.error("!getWalletNfts failed", e);
        return [];
      }
    },

    getNftAttribute: async (smartContractAddress) => {
      const nfts = await getEveryNftForContract(api, smartContractAddress);

      return createAttributeListFromNftMetadata(nfts as NFT[]);
    },
  };
}
