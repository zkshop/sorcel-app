import { useAppSelector } from 'store/store';

export const useIsAnHolder = (curation: string) => {
  const collections = useAppSelector((state) => state.user.nfts).map((nft) => nft.contract.address);

  const isAnNftHolder = collections.includes(curation?.toLowerCase());

  return isAnNftHolder;
};
