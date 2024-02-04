import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  tagTypes: ["Orders", "Reviews"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://b6c487f79077af26.mokky.dev/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ currentPage, sortBy, sortList }) =>
        `items?_select=title,price,image,id&limit=6&page=${currentPage}&sortBy=${sortBy}&${sortList}`,
    }),
    getSortData: builder.query({
      query: () => `items?_select=flower,color,packing`,
    }),
    getDataAccount: builder.mutation({
      query: (token) => ({
        url: "auth_me",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: () => [
        {
          type: "Orders",
        },
      ],
    }),
    changeData: builder.mutation({
      query: (params) => ({
        url: `users/${params.id}`,
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: {
          fullName: params.fullName,
          email: params.email,
          password: params.password,
          phone: params.phone,
          city: params.city,
          orders: params.orders,
        },
      }),
      invalidatesTags: () => [
        {
          type: "Orders",
        },
      ],
    }),
    getOrders: builder.query({
      query: ({ id }) => `/orders/${id}`,
    }),
    authAndLogin: builder.mutation({
      query: (params) => ({
        url: `${params.isLogin}`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: {
          fullName: params.fullName,
          email: params.email,
          password: params.password,
          phone: params.phone,
          city: params.city,
          orders: params.orders,
        },
      }),
    }),

    getReviews: builder.query({
      query: ({ currentPage }) => ({
        url: `reviews?limit=5&page=${currentPage}&sortBy=-id`,
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      providesTags: () => [
        {
          type: "Reviews",
        },
      ],
    }),
    addReview: builder.mutation({
      query: (params) => ({
        url: `reviews`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: {
          date: params.date,
          time: params.time,
          name: params.name,
          email: params.email,
          city: params.city,
          review: params.review,
          estimation: params.estimation,
        },
      }),
      invalidatesTags: () => [
        {
          type: "Reviews",
        },
      ],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetDataAccountMutation,
  useGetOrdersQuery,
  useAuthAndLoginMutation,
  useChangeDataMutation,
  useGetReviewsQuery,
  useAddReviewMutation,
  useGetSortDataQuery,
} = api;

export const { reducer: apiReducer, middleware: apiMiddleware } = api;

export default api;
