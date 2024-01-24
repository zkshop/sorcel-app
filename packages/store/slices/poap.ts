import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { Poap } from '@3shop/poap';
import { getEveryPOAPOfAWallet } from '@3shop/poap';

export const fetchPOAPS = createAsyncThunk(
  'poap/fetch',
  async (walletAddress: string) => {
    console.log("#br9");
    return await getEveryPOAPOfAWallet(walletAddress)
  },
);

const initialState: Poap[] = [];

export const poapSlice = createSlice({
  name: 'poap',
  initialState,
  reducers: {
    reset: () => [],
  },
  extraReducers(builder) {
    builder.addCase(fetchPOAPS.fulfilled, (state, action) => action.payload);
  },
});

export const { reset } = poapSlice.actions;

export default poapSlice.reducer;
