import { Nft, NftAttribute } from 'domains';
import uniq from 'lodash/uniq';

export const createAttributeListFromNftMetadata = (nfts: Nft[]): NftAttribute<any>[] => {
  const nftAttributes: NftAttribute<any>[] = [];

  nfts.forEach((nft) => {
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
};
