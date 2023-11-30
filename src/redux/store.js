import { configureStore } from "@reduxjs/toolkit";
import { advertsApi } from "./advertsApi";

export const store = configureStore({
  reducer: {
    [advertsApi.reducerPath]: advertsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(advertsApi.middleware),
});
