import { useCallback, useEffect } from 'react';
import { useAccount } from 'wagmi';

import { fetchNFTS, reset } from '../store/slices/nfts';
import { useAppDispatch, useAppSelector } from '../store/store';

import { fetchPOAPS, reset as resetPoaps } from 'store/slices/poap';

const useUpdateThemeOnConnection = () => {
  const { isConnected, isDisconnected, address } = useAccount();
  const { nfts, poap } = useAppSelector((state) => state.user);
  const email = useAppSelector((state) => state.user.auth.email);
  const dispatch = useAppDispatch();

  const getNfts = useCallback(async () => {
    if (address) {
      dispatch(fetchNFTS(address));
      dispatch(fetchPOAPS(address));
    }
    if (email) {
      dispatch(fetchPOAPS(email));
    }
  }, [address, dispatch, email]);

  useEffect(() => {
    if (isDisconnected) {
      dispatch(reset());
      dispatch(resetPoaps());
    }
  }, [dispatch, isConnected, isDisconnected]);

  useEffect(() => {
    if (address || email) {
      getNfts();
    }
  }, [address, email, getNfts]);

  return { nfts, poap };
};

export default useUpdateThemeOnConnection;
