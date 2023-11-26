import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./slices/addToCartSlice";
import authSlice from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    addToCartSlice,
    authSlice,
  },
});
