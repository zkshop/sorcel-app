import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import nftAttributesReducer from './slices/nftAttributes';
import gateReducer from './slices/gate';
import segmentReducer from './slices/segment';
import userSettingsReducer from './slices/user';


const rootReducer = combineReducers({
  gates: gateReducer,
  nftAttributes: nftAttributesReducer,
  segments: segmentReducer,
  userSettings: userSettingsReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = (typeof store)['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const userSettingsSelector = () => useAppSelector((state) => state.userSettings);
