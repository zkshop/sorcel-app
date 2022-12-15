import type { Product } from 'apollo';
import { useAppSelector } from 'store/store';

export const useIsAnHolder = ({ poapId, curation }: Product) => {
  const poapIds = useAppSelector((state) => state.user.poap).map(({ event: { id } }) => id);
  const collections = useAppSelector((state) => state.user.nfts).map((nft) => nft.contract.address);

  const isAPoapHolder = Boolean(poapId && poapIds.includes(poapId));
  const isAnNftHolder = Boolean(curation && collections.includes(curation.toLowerCase()));

  return isAPoapHolder || isAnNftHolder;
};
