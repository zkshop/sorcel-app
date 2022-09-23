import { useCallback, useEffect } from "react";
import { useAccount } from "wagmi";

import { fetchNFTS, reset } from "../store/slices/nfts";
import { update } from "../store/slices/theme";
import { useAppDispatch, useAppSelector } from "../store/store";

const useUpdateThemeOnConnection = () => {
  const { isConnected, isDisconnected, address } = useAccount();
  const nfts = useAppSelector((state) => state.nfts);
  const dispatch = useAppDispatch();

  const getNfts = useCallback(async () => {
    if (address) {
      dispatch(fetchNFTS(address));
    }
  }, [address, dispatch])

  useEffect(() => {
    const setVanillaTheme = () => dispatch(update("vanilla"));
    const setFirstTheme = () => dispatch(update("first"));

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

  return { nfts };
};

export default useUpdateThemeOnConnection;
