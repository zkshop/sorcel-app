
/**
 * This interface represents the query parameters that can be used for a request to the Bithomp NFT API.
 * For more information, refer to the Bithomp API documentation: https://docs.bithomp.com/#nfts
 */
export interface NftApiParams {
  /** The XRPL address of the Owner */
  owner?: string;
  /** The XRPL address of the Issuer */
  issuer?: string;
  /** Taxon for that Issuer (optional, will be ignored without an Issuer) */
  taxon?: string;
  /** Set to true, to list NFTs only with available metadata */
  hasMetadata?: boolean;
  /** Set to true, if you want result to include deleted NFTs */
  includeDeleted?: boolean;
  /** Here you can specify a minter from https://bithomp.com/nft-minters?period=all to filter your search by minter project. */
  mintedByMarketplace?: string;
  /** The marker from the previous request, if you need a next page of NFTs */
  marker?: string;
  /** Can be set to onSale to get the list of NFTs with active sell offers */
  list?: 'nfts' | 'onSale';
  /** Used to filter NFTs for sale list=onSale, can be set as a XRPL address (to specify a particular MarketPlace), public, knownBrokers, publicAndKnownBrokers, all */
  destination?: 'all' | 'public' | 'knownBrokers' | 'publicAndKnownBrokers' | string; // string for XRPL address
  /** Used to order NFTs: 1. for list=nfts, can be mintedNew and mintedOld, 2. for list=onSale, can be offerCreatedNew, offerCreatedOld, priceLow, priceHigh */
  order?: 'mintedNew' | 'mintedOld' | 'offerCreatedNew' | 'offerCreatedOld' | 'priceLow' | 'priceHigh';
  /** Used to filter NFTs for sale list=onSale, can be XRP or any other currency code. */
  currency?: 'XRP' | string;
  /** A currency issuer for the currency if it is not an XRP. */
  currencyIssuer?: string;
  /** It can be used to show NFTs which were minted during some period of time. A time period, all time all, last 24h day, last 7 days week, last 30 days month, last 365 days year, or 1671490800000..1671663600000 - period or 2022-12-20T00:00:00.000Z..2022-12-22T00:00:00.000Z, to show from specific date till now: 1671490800000.. or 2022-12-20T00:00:00.000Z.. */
  issuedAt?: string;
  /** It can be used to show NFTs which were burned during some period of time. A time period, all time all, last 24h day, last 7 days week, last 30 days month, last 365 days year. or 1671490800000..1671663600000 - period or 2022-12-20T00:00:00.000Z..2022-12-22T00:00:00.000Z, to show from specific date till now: 1671490800000.. or 2022-12-20T00:00:00.000Z.. */
  deletedAt?: string;
}

export interface BithmompNft {
  type: string;
  flags: {
    burnable: boolean;
    onlyXRP: boolean;
    trustLine: boolean;
    transferable: boolean;
  };
  issuer: string;
  nftokenID: string;
  nftokenTaxon: number;
  transferFee: number;
  sequence: number;
  owner: string;
  uri: string | null;
  url: string;
  nftSerial: number;
  mintedByMarketplace: string;
  collection: string | null;
  issuerDetails: {
    username: string;
    service: string;
  };
  ownerDetails: {
    username: string | null;
    service: string | null;
  };
  metadata: {
    dna: string;
    name: string;
    description: string;
    image: string;
    imageHash: string;
    edition: number;
    date: number;
    attributes: Array<{
      trait_type: string;
      value: string;
    }>;
    schema: string;
    nftType: string;
    collection: {
      name: string;
      description: string;
    };
  };
  jsonMeta: boolean;
}
