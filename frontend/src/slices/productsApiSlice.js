import { PRODUCTS_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL
      }),
      keepUnusedDataFor: 5
    }),
    getProductDetails: builder.query({
      query: (produuctId) => ({
        url: `${PRODUCTS_URL}/${produuctId}`
      }),
      keepUnusedDataFor: 5
    })
  })
})

export const { useGetProductsQuery, useGetProductDetailsQuery } = productsApiSlice