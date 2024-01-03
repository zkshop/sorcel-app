/**
 * This interface is Sorcel abstraction of an NFT.
 */
export interface SorcelNft {
  tokenId: string;
  name?: string;
}

export interface SorcelNftExtended<T> extends SorcelNft {
  /** An NFT collection is identified by identifiers, they are variable in number and kind. */
  identifiers: T,
}
