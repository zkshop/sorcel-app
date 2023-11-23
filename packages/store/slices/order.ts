import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type ShippingInformations = {
  firstname: string;
  lastname: string;
  address: string;
  email: string;
  amount: number;
  gateId?: string;
  claims?: string;
};

type State = ShippingInformations | null;

export const orderSlice = createSlice({
  name: 'order',
  initialState: null as State,
  reducers: {
    storeOrder: (_, action: PayloadAction<ShippingInformations>) => action.payload,
    resetOrder: () => null,
  },
});

export const { resetOrder, storeOrder } = orderSlice.actions;

export default orderSlice.reducer;
