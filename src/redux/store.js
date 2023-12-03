import { configureStore } from "@reduxjs/toolkit";
import { advertsApi } from "./advertsApi";
import { filtersReducer } from "./filtersSlice";
import { persistedFavoritesReducer } from "./favoritesSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    [advertsApi.reducerPath]: advertsApi.reducer,
    filters: filtersReducer,
    favorites: persistedFavoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(advertsApi.middleware),
});

export const persister = persistStore(store);
