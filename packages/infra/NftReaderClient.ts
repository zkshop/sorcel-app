import { createAlchemy, Network } from 'alchemy';
import { NftAttribute, NftClient } from 'domains/nft';

export function NftReaderClient(network: Network): NftClient {
  const api = createAlchemy(network);
  return {
    getWalletNfts: async (walletAddress) => {
      const result = await api.nft.getNftsForOwner(walletAddress);
      return result.ownedNfts;
    },
    getNftAttribute: async (smartContractAddress) => {
      const result = await api.nft.getNftsForContract(smartContractAddress);
      const nftAttributes: NftAttribute<any>[] = [];
      console.log({ result });

      result.nfts.forEach((nft) => {
        nft.rawMetadata?.attributes?.forEach((attribute) => {
          const key = attribute.trait_type;
          const attributeIndex = nftAttributes.findIndex((elem) => elem.name === key);
          console.log({ attribute });

          if (attributeIndex !== -1) {
            nftAttributes[attributeIndex].options.push(attribute.value);
          } else {
            nftAttributes.push({
              name: key,
              options: [attribute.value],
            });
          }
        });
      });

      return nftAttributes;
    },
  };
}
