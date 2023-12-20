import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./slices/addToCartSlice";
import authSlice from "./slices/authSlice";
import flowerSlice from "./slices/flowerSlice";
import changeDataSlice from "./slices/changeDataSlice";
import reviewsSlice from "./slices/reviewsSlice";

export const store = configureStore({
  reducer: {
    addToCartSlice,
    authSlice,
    flowerSlice,
    changeDataSlice,
    reviewsSlice,
  },
});
