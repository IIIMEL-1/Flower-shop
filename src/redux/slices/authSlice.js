import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    userDetails: null,
    error: null,
  },
  reducers: {
    getData: (state, { payload }) => {
      state.userDetails = payload.data;

      if (payload.error) {
        state.error = payload.error;
      }
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
