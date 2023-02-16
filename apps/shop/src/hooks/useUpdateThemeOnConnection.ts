import { useCallback, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@3shop/store';
import { fetchNFTS, reset } from '@3shop/store/slices/nfts';
import { fetchPOAPS, reset as resetPoaps } from '@3shop/store/slices/poap';
import { useAccount } from '@3shop/wallet';
const useUpdateThemeOnConnection = () => {
  const { isConnected, isDisconnected, address } = useAccount();
  const { nfts, poap } = useAppSelector((state) => state.user);
  const email = useAppSelector((state) => state.user.auth.email);
  const connectionType = useAppSelector((state) => state.user.auth.type);
  const publicAddress = useAppSelector((state) => state.user.auth.publicAddress);

  const dispatch = useAppDispatch();

  const getNfts = useCallback(async () => {
    if (connectionType === 'paper' && publicAddress) {
      dispatch(fetchNFTS(publicAddress));
      dispatch(fetchPOAPS(publicAddress));
    } else if (address) {
      dispatch(fetchNFTS(address));
      dispatch(fetchPOAPS(address));
    } else if (email) {
      dispatch(fetchPOAPS(email));
    }
  }, [connectionType, publicAddress, address, email, dispatch]);

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
