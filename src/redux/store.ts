import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./slices/addToCartSlice";
import authSlice from "./slices/authSlice";
import sortSlice from "./slices/sortSlice";
import themeSlice from "./slices/themeSlice";

import api from "./slices/createApi";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    addToCartSlice,
    authSlice,
    sortSlice,
    themeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
