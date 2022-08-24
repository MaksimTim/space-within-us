import { configureStore } from "@reduxjs/toolkit";
import { nasaApi } from "./nasa/nasa.api";
import nasaReducer from "./nasa/nasa.slice";

export const store = configureStore({
  reducer: {
    nasa: nasaReducer,
    [nasaApi.reducerPath]: nasaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nasaApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
