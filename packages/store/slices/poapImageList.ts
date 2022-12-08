import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getPOAPListFromIds } from 'poap';

export const fetchPOAPImageList = createAsyncThunk(
  'poapImageList/fetch',
  async (ids: string[]) => await getPOAPListFromIds(ids),
);

const initialState: any[] = [];

export const poapImageListSlice = createSlice({
  name: 'poapImageList',
  initialState,
  reducers: {
    reset: () => [],
  },
  extraReducers(builder) {
    builder.addCase(fetchPOAPImageList.fulfilled, (state, action) => action.payload);
  },
});

export const { reset } = poapImageListSlice.actions;

export default poapImageListSlice.reducer;
