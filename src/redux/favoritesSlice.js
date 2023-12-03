import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { favorites: [] },
  reducers: {
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    removeFromFavorites(state, action) {
      return {
        ...state,
        favorites: state.favorites.filter((el) => el.id !== action.payload),
      };
    },
  },
});

const persistConfig = {
  key: "favorites",
  storage,
};

export const persistedFavoritesReducer = persistReducer(
  persistConfig,
  favoritesSlice.reducer
);

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
