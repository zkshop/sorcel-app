import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Nft } from '@3shop/domains';
import { NftService } from '@3shop/domains';
import { NftReaderClient } from '../../infra/NFTReaderClient';

const WalletScrapper = NftService(NftReaderClient());

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
