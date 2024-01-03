import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./slices/addToCartSlice";
import authSlice from "./slices/authSlice";
/* import changeDataSlice from "./slices/changeDataSlice"; */
import reviewsSlice from "./slices/reviewsSlice";

import api from "./slices/createApi";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    addToCartSlice,
    authSlice,
    /*    changeDataSlice, */
    reviewsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
