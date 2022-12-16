export type { Nft } from '@3shop/alchemy';

export type NftAttribute<T> = {
  name: string;
  options: T[];
};
