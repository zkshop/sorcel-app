import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Nft } from '@3shop/domains';
import { NftService, Network } from '@3shop/domains';
import { NftReaderClient } from '@3shop/infra';
import { envVars } from '@3shop/config';

const WalletScrapper = NftService(
  NftReaderClient((envVars.NETWORK as Network | undefined) || Network.MATIC_MAINNET),
);

export const fetchNFTS = createAsyncThunk(
  'nfts/fetch',
  async (walletAddress: string) => await WalletScrapper.getWalletNfts(walletAddress),
);

const initialState: Nft[] = [];

export const balancesSlice = createSlice({
  name: 'nfts',
  initialState,
  reducers: {
    reset: () => [],
  },
  extraReducers(builder) {
    builder.addCase(fetchNFTS.fulfilled, (state, action) => action.payload);
  },
});

export const { reset } = balancesSlice.actions;

export default balancesSlice.reducer;
