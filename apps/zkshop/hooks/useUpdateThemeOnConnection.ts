import { useCallback, useEffect } from 'react';
import { useAccount } from 'wagmi';

import { fetchNFTS, reset } from '../store/slices/nfts';
import { update } from '../store/slices/theme';
import { useAppDispatch, useAppSelector } from '../store/store';

import { fetchPOAPS } from 'store/slices/poap';

const useUpdateThemeOnConnection = () => {
  const { isConnected, isDisconnected, address } = useAccount();
  const { nfts, poap } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const getNfts = useCallback(async () => {
    if (address) {
      dispatch(fetchNFTS(address));
      dispatch(fetchPOAPS(address));
    }
  }, [address, dispatch]);

  useEffect(() => {
    const setVanillaTheme = () => dispatch(update('vanilla'));
    const setFirstTheme = () => dispatch(update('first'));

    if (isConnected) {
      setFirstTheme();
    }
    if (isDisconnected) {
      setVanillaTheme();
      dispatch(reset());
    }
  }, [dispatch, isConnected, isDisconnected]);

  useEffect(() => {
    if (address) {
      getNfts();
    }
  }, [address, getNfts]);

  return { nfts, poap };
};

export default useUpdateThemeOnConnection;
