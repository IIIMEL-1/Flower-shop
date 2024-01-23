import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./slices/addToCartSlice";
import authSlice from "./slices/authSlice";
import sortSlice from "./slices/sortSlice";

import api from "./slices/createApi";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    addToCartSlice,
    authSlice,
    sortSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
