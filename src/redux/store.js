import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./slices/addToCartSlice";
import authSlice from "./slices/authSlice";
import flowerSlice from "./slices/flowerSlice";

export const store = configureStore({
  reducer: {
    addToCartSlice,
    authSlice,
    flowerSlice,
  },
});
