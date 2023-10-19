import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://booking-backend-theta.vercel.app/api/v1" }),
  tagTypes: [""],
  endpoints: () => ({}),
});
