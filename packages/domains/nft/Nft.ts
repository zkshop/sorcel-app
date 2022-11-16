export type { Nft } from 'alchemy';

export type NftAttribute<T> = {
  name: string;
  options: T[];
};
