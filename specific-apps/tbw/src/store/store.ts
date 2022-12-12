import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import nftsReducer from './reducer/nfts';
import authReducer from './reducer/auth';

const rootReducer = combineReducers({
  user: combineReducers({
    nfts: nftsReducer,
    auth: authReducer,
  }),
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;