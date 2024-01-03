import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
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
    changeData: builder.query({
      query: (params) => ({
        url: `users/${params.id}`,
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
  }),
});

export const {
  useGetProductsQuery,
  useGetDataAccountQuery,
  useAuthAndLoginQuery,
  useChangeDataQuery,
} = api;

export const { reducer: apiReducer, middleware: apiMiddleware } = api;

export default api;
