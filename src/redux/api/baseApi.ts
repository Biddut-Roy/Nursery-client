import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BK_URL_LINK}`,
  }),
  tagTypes: ["nursery", "Product"],
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
    updateProduct: builder.mutation({
      query: (data) => ({
        url: "/product/update",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["nursery"],
    }),
    getProduct: builder.query({
      query: ({ search, filter, page }) => {
        const params = new URLSearchParams();

        if (search) {
          params.append("search", search);
        }
        if (filter) {
          params.append("filter", filter);
        }
        if (page) {
          params.append("page", page);
        }

        return { url: `/product/get?${params.toString()}`, method: "GET" };
      },
    }),
    allProduct: builder.query({
      query: () => ({
        url: `/product/all`,
        method: "GET",
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/delete/?id=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    singleProduct: builder.query({
      query: (id) => ({
        url: `/product/single/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useAddProductMutation,
  useGetProductQuery,
  useDeleteProductMutation,
  useAllProductQuery,
  useSingleProductQuery,
  useUpdateProductMutation,
} = baseApi;
