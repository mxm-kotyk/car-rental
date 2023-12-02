import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const advertsApi = createApi({
  reducerPath: "advertsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://648f2fb475a96b664444ce4d.mockapi.io",
  }),
  endpoints: (builder) => ({
    getAdverts: builder.query({
      query: (pageNumber) => `/adverts?page=${pageNumber}&limit=12`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getAdvertsStatistics: builder.query({
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
          .map((el) => +el.rentalPrice.slice(1))
          .reduce((acc, el) => {
            if (!acc.includes(el)) acc.push(el);
            return acc;
          }, [])
          .sort((a, b) => a - b);

        return { totalAds: response.length, priceList, makeList };
      },
    }),
  }),
});

export const { useGetAdvertsQuery, useGetAdvertsStatisticsQuery } = advertsApi;
