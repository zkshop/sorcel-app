import { Maybe } from "node_modules/@3shop/apollo";
/**
 * This interface is Sorcel abstraction of an NFT.
 */
export interface SorcelNft {
  tokenId: string;
  name?: Maybe<string>;
  combinedIdentifiers: string;
  thumbnailUrl?: Maybe<string>;
  originalUrl?: Maybe<string>;
}

// T = identifiers type, K = apiResponseType
export interface SorcelNftExtended<T, K> extends SorcelNft {
  /** An NFT collection is identified by identifiers, they are variable in number and kind. */
  identifiers: T[];
  apiResponse: K;
}
