import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const advertsApi = createApi({
  reducerPath: "advertsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://648f2fb475a96b664444ce4d.mockapi.io",
  }),
  endpoints: (builder) => ({
    getAdvertsPortion: builder.query({
      query: (pageNumber) => `/adverts?page=${pageNumber}&limit=12`,
    }),
    getAllAdverts: builder.query({
      query: () => "/adverts",
      transformResponse: (response) => {
        const makeList = response
          .map((el) => el.make)
          .reduce((acc, el) => {
            if (!acc.includes(el)) acc.push(el);
            return acc;
          }, [])
          .sort((a, b) => a.localeCompare(b));

        const priceList = response
          .map((el) => Math.floor(+el.rentalPrice.slice(1) / 10) * 10)
          .reduce((acc, el) => {
            if (!acc.includes(el)) acc.push(el);
            return acc;
          }, [])
          .sort((a, b) => a - b);

        const lowestPrice = Math.min(
          ...response.map((el) => +el.rentalPrice.slice(1))
        );

        return {
          allAdverts: response,
          statistic: {
            totalAds: response.length,
            priceList,
            makeList,
            lowestPrice,
          },
        };
      },
    }),
  }),
});

export const { useGetAdvertsPortionQuery, useGetAllAdvertsQuery } = advertsApi;
