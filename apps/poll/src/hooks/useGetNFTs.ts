import { useAccount } from '@3shop/wallet';
import { useEffect } from 'react';
import { fetchNFTS, reset } from '../store/slices';
import { useAppDispatch, useAppSelector } from '../store/store';

export const useGetNFTs = () => {
  const { address } = useAccount();
  const nfts = useAppSelector((state) => state.nfts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (address) {
      dispatch(fetchNFTS(address));
    } else {
      dispatch(reset());
    }
  }, [address]);

  return nfts;
};
