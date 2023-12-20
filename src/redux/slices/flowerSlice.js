import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFlowers = createAsyncThunk(
  "flower/fetchFlowersStatus",
  async (params) => {
    const { sortBy, page } = params;

    const { data } = await axios.get(
      `https://b6c487f79077af26.mokky.dev/items?limit=6&page=${page}&sortBy=${sortBy}`
    );

    return data;
  }
);

const initialState = {
  products: [],
  totalPages: 1,
  status: "loading",
};

export const flowerSlice = createSlice({
  name: "flower",
  initialState,
  reducers: {},

  extraReducers: {
    [fetchFlowers.pending]: (state) => {
      state.status = "loading";
      state.products = [];
    },

    [fetchFlowers.fulfilled]: (state, action) => {
      state.products = action.payload.items;
      state.totalPages = action.payload.meta.total_pages;
      state.status = "success";
    },

    [fetchFlowers.rejected]: (state, action) => {
      state.products = [];
      state.status = "error";
    },
  },
});

export const { setItems } = flowerSlice.actions;

export default flowerSlice.reducer;
