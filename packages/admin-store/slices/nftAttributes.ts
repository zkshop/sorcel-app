import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { NftAttribute } from '@3shop/domains';
import { Network, NftService } from '@3shop/domains';
import { NftReaderClient } from '@3shop/admin-infra';

const nft = NftService(NftReaderClient(Network.MATIC_MAINNET));

export const fetchNFTAttributes = createAsyncThunk(
  'nftAttributes/fetch',
  async (contractAddress: string) => await nft.getNftAttribute(contractAddress),
);

const initialState: { loading: boolean; hits: NftAttribute<any>[] | null } = {
  hits: null,
  loading: false,
};

const nftAttributes = createSlice({
  initialState,
  name: 'nftAttributes',
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNFTAttributes.pending, () => ({
      loading: true,
      hits: null,
    }));

    builder.addCase(fetchNFTAttributes.fulfilled, (state, action) => ({
      ...state,
      hits: action.payload,
      loading: false,
    }));

    builder.addCase(fetchNFTAttributes.rejected, () => ({
      hits: null,
      loading: false,
    }));
  },
});

export const {} = nftAttributes.actions;

export default nftAttributes.reducer;
