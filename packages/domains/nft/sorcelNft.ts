/**
 * This interface is Sorcel abstraction of an NFT.
 */
export interface SorcelNft {
  tokenId: string;
  name?: string;
  combinedIdentifiers: string,
}

// T = identifiers type, K = apiResponseType
export interface SorcelNftExtended<T, K> extends SorcelNft {
  /** An NFT collection is identified by identifiers, they are variable in number and kind. */
  identifiers: T[],
  apiResponse: K,
}
