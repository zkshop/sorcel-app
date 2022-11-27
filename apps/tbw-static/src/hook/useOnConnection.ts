import { useCallback, useEffect } from 'react';
import { useAccount } from 'wagmi';

import { fetchNFTS, reset } from '../store/reducer/nfts';
import { useAppDispatch, useAppSelector } from '../store';

export const useOnConnection = () => {
  const { isConnected, isDisconnected, address } = useAccount();
  const { nfts } = useAppSelector((state) => state.user);
  const email = useAppSelector((state) => state.user.auth.email);
  const dispatch = useAppDispatch();

  const getNfts = useCallback(async () => {
    if (address) {
      dispatch(fetchNFTS(address));
    }
  }, [address, dispatch]);

  useEffect(() => {
    if (isDisconnected) {
      dispatch(reset());
    }
  }, [dispatch, isConnected, isDisconnected]);

  useEffect(() => {
    if (address || email) {
      getNfts();
    }
  }, [address, email, getNfts]);

  return { nfts };
};

export default useOnConnection;
