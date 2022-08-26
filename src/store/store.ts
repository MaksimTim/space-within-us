import { configureStore } from "@reduxjs/toolkit";
import { nasaApi } from "./nasa/nasa.api";
import nasaReducer from "./nasa/nasa.slice";
import {kinopoiskApi} from "./kinopoisk/kinopoisk.api";
import filterKinoReducer from "./kinopoisk/filterKino.slice";

export const store = configureStore({
  reducer: {
    nasa: nasaReducer,
    filterKino: filterKinoReducer,
    [nasaApi.reducerPath]: nasaApi.reducer,
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nasaApi.middleware, kinopoiskApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
