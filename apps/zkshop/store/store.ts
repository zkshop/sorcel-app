import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import nftsReducer from "./slices/nfts";
import themeReducer from "./slices/theme";

const rootReducer = combineReducers({
  theme: themeReducer,
  nfts: nftsReducer,
});

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];
export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppStore = ReturnType<typeof makeStore>;
export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector;

export const wrapper = createWrapper<AppStore>(makeStore);
