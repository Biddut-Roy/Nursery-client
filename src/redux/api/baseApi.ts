import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["nursery"],
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: "/category/get",
        method: "GET",
      }),
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/product/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["nursery"],
    }),
    getProduct: builder.query({
      query: () => ({
        url: "/product/get",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useAddProductMutation,
  useGetProductQuery,
} = baseApi;
