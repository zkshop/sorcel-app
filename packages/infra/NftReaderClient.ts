import type { Network, Alchemy, Nft } from 'alchemy';
import { createAlchemy } from 'alchemy';
import type { NftClient } from 'domains/nft';
import { createAttributeListFromNftMetadata } from 'pure';

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

export function NftReaderClient(network: Network): NftClient {
  const api = createAlchemy(network);
  return {
    getWalletNfts: async (walletAddress) => {
      const result = await api.nft.getNftsForOwner(walletAddress);
      return result.ownedNfts;
    },
    getNftAttribute: async (smartContractAddress) => {
      const nfts = await getEveryNftForContract(api, smartContractAddress);

      return createAttributeListFromNftMetadata(nfts);
    },
  };
}
