import type { DeliveryTaxesData } from '@3shop/domains';
import { DeliveryTaxesService } from '@3shop/domains';
import { ShopDeliveryTaxesClient } from '@3shop/infra';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const deliveryTaxes = DeliveryTaxesService(ShopDeliveryTaxesClient());

export const fetchDeliveryTaxes = createAsyncThunk(
  'deliveryTaxes/fetch',
  async (tableName: string) => await deliveryTaxes.getDeliveryTaxesByZone(tableName),
);

type DeliveryTaxesState = {
  data: DeliveryTaxesData[];
  loading: boolean;
};

const initialState = {
  data: [],
  loading: false,
} as DeliveryTaxesState;

const deliveryTaxesSlice = createSlice({
  name: 'deliveryTaxes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDeliveryTaxes.fulfilled, (_, action) => ({
      data: action.payload,
      loading: false,
    }));

    builder.addCase(fetchDeliveryTaxes.pending, (state) => ({
      ...state,
      loading: true,
    }));

    builder.addCase(fetchDeliveryTaxes.rejected, (state) => ({
      ...state,
      loading: false,
    }));
  },
});

export default deliveryTaxesSlice.reducer;
