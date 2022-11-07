import { useAppSelector } from 'store/store';

export const useIsAnHolder = (poapId: number, curation: string) => {
  const poapIds = useAppSelector((state) => state.user.poap).map(({ event: { id } }) => id);
  const collections = useAppSelector((state) => state.user.nfts).map((nft) => nft.contract.address);

  const isAPoapHolder = poapIds.includes(poapId);
  const isAnNftHolder = collections.includes(curation?.toLowerCase());

  return isAPoapHolder || isAnNftHolder;
};
