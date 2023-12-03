import { configureStore } from "@reduxjs/toolkit";
import { advertsApi } from "./advertsApi";
import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    [advertsApi.reducerPath]: advertsApi.reducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(advertsApi.middleware),
});
