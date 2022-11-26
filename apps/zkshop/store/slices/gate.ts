import { createSlice } from '@reduxjs/toolkit';
import findLastIndex from 'lodash/findLastIndex';

type Attribute = {
  name: string;
  value: string;
};

type Gate = Attribute[][];

const initialState: Gate = [[]];

function setAttributeToGateAction(
  state: Gate,
  action: { type: string; payload: { attribute: Attribute; gateIndex: number } },
) {
  const { gateIndex, attribute } = action.payload;

  return [
    ...state.slice(0, gateIndex),
    [...state[gateIndex].filter((attr) => attr.name !== attribute.name), attribute],
    ...state.slice(gateIndex, findLastIndex(state)),
  ];
}

export const gatesSlice = createSlice({
  name: 'gates',
  initialState,
  reducers: {
    setAttributeToGate: setAttributeToGateAction,
    reset: () => [],
  },
});

export const { reset, setAttributeToGate } = gatesSlice.actions;

export default gatesSlice.reducer;
