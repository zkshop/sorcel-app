import { createSlice } from '@reduxjs/toolkit';

type Attribute = {
  name: string;
  value: string;
};

type Gate = Attribute[];

const initialState: Gate = [];

function setAttributeToGateAction(
  state: Gate,
  action: { type: string; payload: { attribute: Attribute } },
) {
  const { attribute } = action.payload;

  return [...state.filter((attr) => attr.name !== attribute.name), attribute];
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
