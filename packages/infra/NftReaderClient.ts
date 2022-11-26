import { createAlchemy, Network } from 'alchemy';
import { NftAttribute, NftClient } from 'domains/nft';
import uniq from 'lodash/uniq';
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

      result.nfts.forEach((nft) => {
        nft.rawMetadata?.attributes?.forEach((attribute) => {
          const key = attribute.trait_type;
          const attributeIndex = nftAttributes.findIndex((elem) => elem.name === key);

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

      return nftAttributes.map((attr) => ({ ...attr, options: uniq(attr.options) }));
    },
  };
}
