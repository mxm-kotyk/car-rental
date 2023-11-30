import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./thunks.js";

const handleFetchAdvertsPending = (state) => {
  state.isLoading = true;
};

const handleFetchAdvertsFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.adverts = [...state.adverts, ...payload];
};

const handleFetchAdvertsRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const advertsSlice = createSlice({
  name: "adverts",
  initialState: { adverts: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, handleFetchAdvertsPending)
      .addCase(fetchAdverts.fulfilled, handleFetchAdvertsFulfilled)
      .addCase(fetchAdverts.rejected, handleFetchAdvertsRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
