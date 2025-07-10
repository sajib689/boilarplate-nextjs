import { baseApi } from "./api/baseApi";
import userSlice from './authSlice'

export const reducer = {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: userSlice
}