import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define an API slice
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://spark-ecommerce-backend.onrender.com/api/',
    }),
    endpoints: (builder) => ({
        getPaginatedProducts: builder.query({
            query: ({ page = 1, limit = 10 }) =>
                `products?page=${page}&limit=${limit}`,
        }),
        getProductById: builder.query({
            query: (productSlug) => `products/${productSlug}`,
        }),
    }),
});

export const { useGetPaginatedProductsQuery, useGetProductByIdQuery } = api;
