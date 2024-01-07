import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/* const res = fetch("https://b6c487f79077af26.mokky.dev/items?_select=flower,color,packing"); */

const api = createApi({
  reducerPath: "api",
  tagTypes: ["orders"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://b6c487f79077af26.mokky.dev/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ currentPage, sortBy }) =>
        `items?limit=6&page=${currentPage}&sortBy=${sortBy}`,
    }),
    getDataAccount: builder.query({
      query: (token) => ({
        url: "/auth_me",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: () => [
        {
          type: "orders",
        },
      ],
    }),
    authAndLogin: builder.query({
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
          type: "orders",
        },
      ],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetDataAccountQuery,
  useAuthAndLoginQuery,
  useChangeDataMutation,
} = api;

export const { reducer: apiReducer, middleware: apiMiddleware } = api;

export default api;
