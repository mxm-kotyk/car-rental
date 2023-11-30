import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const advertsApi = createApi({
  reducerPath: "advertsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://648f2fb475a96b664444ce4d.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getAllAdverts: builder.query({
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
  }),
});

export const { useGetAllAdvertsQuery } = advertsApi;
