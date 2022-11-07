import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Nft, WalletScrapperService, Network } from 'domains';
import { NftScrapperClient } from 'infra';

const WalletScrapper = WalletScrapperService(NftScrapperClient(Network.ETH_MAINNET));

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
