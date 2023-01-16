import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import nftsReducer from './slices/nfts';
import poapReducer from './slices/poap';
import orderReducer from './slices/order';

import poapImageListReducer from './slices/poapImageList';
import authReducer from './slices/auth';
import deliveryTaxesReducer from './slices/deliveryTaxes';

const rootReducer = combineReducers({
  poapImageList: poapImageListReducer,
  user: combineReducers({
    nfts: nftsReducer,
    poap: poapReducer,
    auth: authReducer,
    order: orderReducer,
  }),
  deliveryTaxes: deliveryTaxesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

const makeStore = () => store;

export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
