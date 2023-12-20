import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviewsStatus",
  async (params) => {
    const { currentPage } = params;

    const res = fetch(
      `https://b6c487f79077af26.mokky.dev/reviews?limit=5&page=${currentPage}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    return res.then((response) => response.json());
  }
);

const initialState = {
  reviews: "",
  totalPages: 1,
  status: "",
};

export const reviewsSlice = createSlice({
  name: "reviewsSlice",
  initialState,
  reducers: {},

  extraReducers: {
    [fetchReviews.pending]: (state) => {
      state.reviews = "";
      state.status = "loading";
    },

    [fetchReviews.fulfilled]: (state, action) => {
      state.reviews = action.payload.items;
      state.totalPages = action.payload.meta.total_pages;
      state.status = "success";
    },

    [fetchReviews.rejected]: (state, action) => {
      state.reviews = "";
      state.status = "error";
    },
  },
});

export default reviewsSlice.reducer;
