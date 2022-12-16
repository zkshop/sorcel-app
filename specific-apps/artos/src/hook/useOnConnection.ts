import { useCallback, useEffect } from 'react';
import { useAccount } from 'wagmi';

import { fetchNFTS, reset } from '../store/reducer/nfts';
import { useAppDispatch, useAppSelector } from '../store';

export const useOnConnection = () => {
  const { isConnected, isDisconnected, address } = useAccount();
  const publicAddress = useAppSelector((state) => state.user.auth.publicAddress);
  const connectionType = useAppSelector((state) => state.user.auth.type);

  const { nfts } = useAppSelector((state) => state.user);
  const email = useAppSelector((state) => state.user.auth.email);
  const dispatch = useAppDispatch();

  const getNfts = useCallback(async () => {
    if (address) {
      dispatch(fetchNFTS(address));
    }

    if (connectionType === '@3shop/paper' && publicAddress) {
      dispatch(fetchNFTS(publicAddress));
    }
  }, [address, connectionType, dispatch, publicAddress]);

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
