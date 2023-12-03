import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    make: "",
    rentalPrice: "",
    mileageFrom: "",
    mileageTo: "",
  },
  reducers: {
    updateFilters(state, { payload }) {
      return { ...state, ...payload };
    },
  },
});

export const { updateFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
