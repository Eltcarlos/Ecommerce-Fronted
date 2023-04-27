import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["Product", "ProductID", "Search", "ClientID", "Admins", "Clients"],
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
    getClients: build.query({
      query: (token) => ({
        url: "api/client",
        method: "GET",
      }),
      providesTags: ["Clients"],
    }),
    getAdmins: build.query({
      query: (token) => ({
        url: "api/management/admins",
        method: "GET",
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
  useGetClientsQuery,
} = api;
