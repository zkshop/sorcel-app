import type { Alchemy, Nft } from '@3shop/alchemy';
import { createAlchemy } from '@3shop/alchemy';
import type { NFT, BlockchainClient } from '@3shop/domains/nft';
import { createAttributeListFromNftMetadata } from '@3shop/pure';

const getEveryNftForContract = async (
  api: Alchemy,
  smartContractAddress: string,
  pageKey?: string,
): Promise<Nft[]> => {
  const result = await api.nft.getNftsForContract(smartContractAddress, {
    pageSize: 100,
    pageKey,
  });

  const nfts = result.nfts;

  if (result.pageKey)
    return nfts.concat(await getEveryNftForContract(api, smartContractAddress, result.pageKey));
  return nfts;
};

export function NftReaderClient(): BlockchainClient {
  const api = createAlchemy();
  return {
    getWalletNfts: async (walletAddress) => {
      const result = await api.nft.getNftsForOwner(walletAddress);
      return result.ownedNfts as NFT[];
    },
    getNftAttribute: async (smartContractAddress) => {
      const nfts = await getEveryNftForContract(api, smartContractAddress);

      return createAttributeListFromNftMetadata(nfts as NFT[]);
    },
  };
}
