/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { RootState } from "../store";
import { login, logout } from "../authSlice";

const BASEAPI = "https://justus-vert.vercel.app/api";

const baseQuery = fetchBaseQuery({
  baseUrl: BASEAPI,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState)?.auth?.accessToken;
    if (token) {
      headers.set("Authorization", token);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (
  arg: string | FetchArgs,
  api: any,
  extraOptions: any
) => {
  let result = await baseQuery(arg, api, extraOptions);
  if (result?.error?.status === 401) {
    const refreshResult = await baseQuery(
      "/auth/refreshToken",
      api,
      extraOptions
    );
    if (refreshResult?.data) {
      const { accessToken, refreshToken, user } = refreshResult.data as {
        accessToken: string;
        refreshToken: string;
        user: any;
      };
      api.dispatch(
        login({
          accessToken,
          refreshToken,
          user,
        })
      );
      result = await baseQuery(arg, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: [],
  endpoints: () => ({}),
});
