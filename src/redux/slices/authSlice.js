import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    userDetails: null,
  },
  reducers: {
    getData: (state, action) => {
      state.userDetails = action.payload.data;
    },
    logoutUser: (state) => {
      state.userDetails = null;
    },
  },
});

export const { getData, logoutUser } = authSlice.actions;
export default authSlice.reducer;
