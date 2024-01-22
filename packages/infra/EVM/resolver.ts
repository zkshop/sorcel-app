import { SorcelNft } from "node_modules/@3shop/domains";
import type { objectResolver } from "../apiTools/convertObject";

export const resolver: objectResolver<SorcelNft> = {
  tokenId: 'tokenId',
  name: ['contract', 'name'],
  combinedIdentifiers: ['contract', 'address'],
};