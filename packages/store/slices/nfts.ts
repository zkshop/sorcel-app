import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { NFT } from '@3shop/domains';
import { NftService } from '@3shop/domains';
import { NftReaderClient } from '@3shop/infra';

const WalletScrapper = NftService(NftReaderClient());

type Params = {
  walletAddress: string;
  contractAdressesToFilter: string[];
};

export const fetchNFTS = createAsyncThunk(
  'nfts/fetch',
  async (params: Params) =>
    await WalletScrapper.getWalletNfts(params.walletAddress, params.contractAdressesToFilter),
);

const initialState: NFT[] = [];

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
