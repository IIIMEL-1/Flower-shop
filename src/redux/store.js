import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./slices/addToCartSlice";
import authSlice from "./slices/authSlice";

import api from "./slices/createApi";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    addToCartSlice,
    authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
