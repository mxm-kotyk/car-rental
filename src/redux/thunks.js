import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchAdvertsRequest } from "../service/mockAPI";

axios.defaults.baseURL = "https://648f2fb475a96b664444ce4d.mockapi.io";

// export const fetchAdvertsRequest = async () => {
//   const { data } = await axios.get("/adverts");
//   return data;
// };

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data: adverts } = await axios.get("/adverts");
      return adverts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
