import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    userDetails: false,
    orders: [],
    isLoading: true,
    error: "",
  },
  reducers: {
    getData: (state, action) => {
      state.userDetails = action.payload.data;
      state.isLoading = action.payload.isLoading;
      state.error = action.payload.error;
    },
  },
});

export const { getData } = authSlice.actions;
export default authSlice.reducer;
