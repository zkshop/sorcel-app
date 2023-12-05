import { useCallback, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@3shop/store';
import { fetchNFTS, reset } from '@3shop/store/slices/nfts';
import { fetchPOAPS, reset as resetPoaps } from '@3shop/store/slices/poap';
import { useAccount } from '@3shop/wallet';
import { useGetEveryContractAddressByAppIdQuery } from '@3shop/apollo';
import { envVars } from '@3shop/config';
import { flatten } from 'lodash';
const useUpdateThemeOnConnection = () => {
  const { isConnected, isDisconnected, address } = useAccount();
  const { nfts, poap } = useAppSelector((state) => state.user);
  const email = useAppSelector((state) => state.user.auth.email);
  const connectionType = useAppSelector((state) => state.user.auth.type);
  const publicAddress = useAppSelector((state) => state.user.auth.publicAddress);
  const { data, loading } = useGetEveryContractAddressByAppIdQuery({
    variables: { app_id: envVars.APP_ID },
  });

  const dispatch = useAppDispatch();

  const getNfts = useCallback(async () => {
    const contractAdressesToFilter = flatten(
      data?.gate_v2.map((gate) => gate.segments.map((segment) => segment.nft_contract_address)),
    ) as string[];

    if (connectionType === 'paper' && publicAddress) {
      dispatch(fetchNFTS({ walletAddress: publicAddress, contractAdressesToFilter }));
      dispatch(fetchPOAPS(publicAddress));
    } else if (address) {
      dispatch(fetchNFTS({ walletAddress: address, contractAdressesToFilter }));
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
    if (!loading && (address || email)) {
      getNfts();
    }
  }, [address, email, getNfts, loading]);

  return { nfts, poap };
};

export default useUpdateThemeOnConnection;
