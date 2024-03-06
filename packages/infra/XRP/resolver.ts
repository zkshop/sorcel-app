import { SorcelNft } from "@3shop/domains";
import { objectResolver, ResolveMany } from "../apiTools/convertObject";
import { BithmompNft } from "@3shop/domains/nft/Xrp/Bithomp.types";

export const resolver: objectResolver<SorcelNft> = {
  tokenId: 'nftokenID',
  name: ['metadata', 'name'],
  combinedIdentifiers: new ResolveMany<SorcelNft['combinedIdentifiers'], BithmompNft>('issuer', 'nftokenTaxon').onResolved((values) => JSON.stringify(values, (_, value) =>
    typeof value === 'number' ? value.toString() : value))
};