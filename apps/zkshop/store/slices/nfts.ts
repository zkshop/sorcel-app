import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Nft } from "alchemy-sdk";

import { getEveryNftOfWallet } from "../../pages/api/nft";

export const fetchNFTS = createAsyncThunk(
  "nfts/fetch",
  async (walletAddress: string) => await getEveryNftOfWallet(walletAddress)
);

const initialState: Nft[] = [];

export const balancesSlice = createSlice({
  name: "nfts",
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
