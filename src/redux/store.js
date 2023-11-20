import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./slices/addToCartSlice";

export const store = configureStore({
  reducer: {
    addToCartSlice,
  },
});
