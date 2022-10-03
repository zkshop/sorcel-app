import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEveryPOAPOfAWallet } from "pages/api/poap/utils";

export const fetchPOAPS = createAsyncThunk(
  "poap/fetch",
  async (walletAddress: string) => await getEveryPOAPOfAWallet(walletAddress)
);


export const poapSlice = createSlice({
  name: "poap",
  initialState: [],
  reducers: {
    reset: () => [],
  },
  extraReducers(builder) {
    builder.addCase(fetchPOAPS.fulfilled, (state, action) => action.payload);
  },
});

export const { reset } = poapSlice.actions;

export default poapSlice.reducer;
