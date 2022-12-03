import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Network, NftAttribute, NftService } from 'domains';
import { NftReaderClient } from 'infra';

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
  reducers: {
    reset: () => {},
  },
  extraReducers(builder) {
    builder.addCase(fetchNFTAttributes.pending, (state, action) => ({
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

export const { reset } = nftAttributes.actions;

export default nftAttributes.reducer;
