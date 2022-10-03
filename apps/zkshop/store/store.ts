import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import nftsReducer from './slices/nfts';
import poapReducer from './slices/poap';
import poapImageListReducer from './slices/poapImageList';
import themeReducer from './slices/theme';

const rootReducer = combineReducers({
  theme: themeReducer,
  nfts: nftsReducer,
  poap: poapReducer,
  poapImageList: poapImageListReducer,
});

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const wrapper = createWrapper<AppStore>(makeStore);
