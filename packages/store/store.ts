import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import nftsReducer from './slices/nfts';
import poapReducer from './slices/poap';
import nftAttributesReducer from './slices/nftAttributes';
import poapImageListReducer from './slices/poapImageList';
import authReducer from './slices/auth';
import gateReducer from './slices/gate';

const rootReducer = combineReducers({
  poapImageList: poapImageListReducer,
  user: combineReducers({
    nfts: nftsReducer,
    poap: poapReducer,
    auth: authReducer,
  }),
  gates: gateReducer,
  nftAttributes: nftAttributesReducer,
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

export const wrapper = createWrapper<AppStore>(makeStore);
