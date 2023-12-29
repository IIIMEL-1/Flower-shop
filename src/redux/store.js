import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./slices/addToCartSlice";
import authSlice, { getData } from "./slices/authSlice";
import flowerSlice from "./slices/flowerSlice";
import changeDataSlice from "./slices/changeDataSlice";
import reviewsSlice from "./slices/reviewsSlice";
import dataAccountSlice from "./slices/getDataSlice";

export const store = configureStore({
  reducer: {
    addToCartSlice,
    authSlice,
    flowerSlice,
    changeDataSlice,
    reviewsSlice,
    dataAccountSlice,
  },
});

let isGetDataDispatched = false;

store.subscribe(() => {
  let userData = store.getState().dataAccountSlice.dataAccount;

  if (userData && !isGetDataDispatched) {
    isGetDataDispatched = true;
    store.dispatch(getData(userData));
  }
});
