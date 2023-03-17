import type { Product } from '@3shop/apollo';
import { useAppSelector } from '@3shop/store/store';

export const useIsAnHolder = ({ poapId, curation }: Omit<Product, 'utility'>) => {
  const poapIds = useAppSelector((state) => state.user.poap).map(({ event: { id } }) => id);
  const collections = useAppSelector((state) => state.user.nfts).map((nft) => nft.contract.address);

  const isAPoapHolder = Boolean(poapId && poapIds.includes(poapId));
  const isAnNftHolder = Boolean(curation && collections.includes(curation.toLowerCase()));

  return isAPoapHolder || isAnNftHolder;
};
