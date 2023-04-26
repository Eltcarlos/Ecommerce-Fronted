import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["Product", "ProductID"],
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => `api/product/products`,
      providesTags: ["Product"],
    }),
    getProductID: build.query({
      query: (id) => `api/product/${id}`,
      providesTags: ["ProductID"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductIDQuery } = api;
