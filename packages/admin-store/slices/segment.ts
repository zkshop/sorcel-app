import { createSlice } from '@reduxjs/toolkit';

export type PoapSegment = {
  type: 'POAP';
  poapIds: string[];
};

export type NftSegment = {
  type: 'NFT';
  network: 'ETHEREUM' | 'POLYGON';
  contractAddress: string;
};

export type Segment = PoapSegment | NftSegment;

type PoapAction = { type: string; payload: PoapSegment };
type NftAction = { type: string; payload: NftSegment };

const initialState = [] as Segment[];

export const formatPoapSegment = (poapIds: string): string[] =>
  poapIds.split(',').map((id) => id.trim());

const segmentSlice = createSlice({
  initialState,
  name: 'segment',
  reducers: {
    addPoapSegment: (state, action: PoapAction) => [...state, action.payload],
    addNftSegment: (state, action: NftAction) => [...state, action.payload],
    deleteSegment: (state, action: { type: string; payload: number }) => {
      state = state.filter((_, index) => index !== action.payload);
      return state;
    },
  },
});

export const { addPoapSegment, addNftSegment, deleteSegment } = segmentSlice.actions;

export default segmentSlice.reducer;