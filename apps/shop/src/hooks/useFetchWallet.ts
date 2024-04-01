import { useCallback, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@3shop/store';
import { fetchNFTS, reset } from '@3shop/store/slices/nfts';
import { fetchPOAPS, reset as resetPoaps } from '@3shop/store/slices/poap';
import { useAccount } from '@3shop/wallet';
import type { Segment } from '@3shop/apollo';
import { useGetEveryContractAddressByAppIdQuery, useGetGates_V2_ByAppIdQuery } from '@3shop/apollo';
import { envVars } from '../envVars';
import { flatten } from 'lodash';
import { createWalletConnectionLog } from '../../utils';

const useFetchWallet = () => {
  const account = useAccount();
  const { isConnected, isDisconnected, address } = account;
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
    const networks: Segment['network'][] = [];
    const contractAdressesToFilter = flatten(
      adressQuery.data?.gate_v2.map((gate) =>
        gate.segments.map((segment) => {
          networks.push(segment.network);
          return segment.nft_contract_address;
        }),
      ),
    ) as string[];

    console.log('!gate_v2', adressQuery.data?.gate_v2);
    console.log('!networks', networks);
    if (address) {
      dispatch(
        fetchNFTS({
          networks,
          walletAddress: address,
          contractAdressesToFilter,
          gates: gateQuery?.data?.gates,
        }),
      );
      dispatch(fetchPOAPS(address));
    } else if (email) {
      dispatch(fetchPOAPS(email));
    }
  }, [publicAddress, address, email, dispatch, gateQuery, adressQuery]);

  useEffect(() => {
    if (isConnected && address) {
      (async () => await createWalletConnectionLog(envVars.APP_ID, address))();
    }
  }, [isConnected, address, isDisconnected]);

  useEffect(() => {
    if (isDisconnected) {
      dispatch(reset());
      dispatch(resetPoaps());
    }
  }, [dispatch, isConnected, isDisconnected]);

  useEffect(() => {
    if (!adressQuery.loading && (address || email)) {
      getNfts();
    }
  }, [address, email, getNfts, adressQuery]);

  return { nfts, poap };
};

export default useFetchWallet;
