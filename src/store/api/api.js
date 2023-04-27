import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = localStorage.getItem("token");

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["Product", "ProductID", "Search", "ClientID", "Admins"],
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => `api/product/products`,
      providesTags: ["Product"],
    }),
    getProductID: build.query({
      query: (id) => `api/product/${id}`,
      providesTags: ["ProductID"],
    }),
    getSearchName: build.query({
      query: (name) => `api/product/search/${name}`,
      providesTags: ["Search"],
    }),
    getClientID: build.query({
      query: (id) => `api/client/${id}`,
      providesTags: ["ClientID"],
    }),
    getAdmins: build.query({
      query: () => ({
        url: "api/management/admins",
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      }),
      providesTags: ["Admins"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductIDQuery,
  useGetSearchNameQuery,
  useGetClientIDQuery,
  useGetAdminsQuery,
} = api;
