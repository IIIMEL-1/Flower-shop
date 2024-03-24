import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    userDetails: null,
  },
  reducers: {
    getData: (state, { payload }) => {
      state.userDetails = payload.data;
    },

    changeUserOrders: (state, { payload }) => {
      state.userDetails.orders = payload.orders;
    },

    logoutUser: (state) => {
      state.userDetails = null;
    },
  },
});

export const { getData, logoutUser, changeUserOrders } = authSlice.actions;
export default authSlice.reducer;
