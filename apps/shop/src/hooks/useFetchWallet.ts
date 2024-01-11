import { useCallback, useEffect, useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '@3shop/store';
import { fetchNFTS, reset } from '@3shop/store/slices/nfts';
import { fetchPOAPS, reset as resetPoaps } from '@3shop/store/slices/poap';
import { useAccount } from '@3shop/wallet';
import {
  useGetEveryContractAddressByAppIdQuery,
  useGetGates_V2Query,
  useGetGates_V2_ByAppIdQuery,
} from '@3shop/apollo';
import { envVars } from '@3shop/config';
import { flatten } from 'lodash';

const useFetchWallet = () => {
  const { isConnected, isDisconnected, address } = useAccount();
  const { nfts, poap } = useAppSelector((state) => state.user);
  const email = useAppSelector((state) => state.user.auth.email);
  const publicAddress = useAppSelector((state) => state.user.auth.publicAddress);

  const adressQuery = useGetEveryContractAddressByAppIdQuery({
    variables: { app_id: envVars.APP_ID },
  });

  const gateQuery = useGetGates_V2_ByAppIdQuery({
    variables: {
      app_id: envVars.APP_ID,
    },
  });

  const dispatch = useAppDispatch();

  const getNfts = useCallback(async () => {
    const contractAdressesToFilter = flatten(
      adressQuery.data?.gate_v2.map((gate) =>
        gate.segments.map((segment) => segment.nft_contract_address),
      ),
    ) as string[];

    if (address) {
      dispatch(
        fetchNFTS({
          walletAddress: address,
          contractAdressesToFilter,
          gate: gateQuery?.data?.gates[0]
        }),
      );
      dispatch(fetchPOAPS(address));
    } else if (email) {
      dispatch(fetchPOAPS(email));
    }
  }, [publicAddress, address, email, dispatch, gateQuery]);

  useEffect(() => {
    if (isDisconnected) {
      dispatch(reset());
      dispatch(resetPoaps());
    }
  }, [dispatch, isConnected, isDisconnected]);

  useEffect(() => {
    // const loadingStates = [gateQuery.loading, adressQuery.loading];
    if (!gateQuery.loading && !adressQuery.loading && (address || email)) {
      console.log('gates @@', gateQuery);
      getNfts();
    }
  }, [address, email, getNfts, gateQuery, adressQuery]);

  return { nfts, poap };
};

export default useFetchWallet;
