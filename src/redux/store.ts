import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice'
import { baseApi } from "./api/baseApi";
import { persistStore } from "redux-persist";


const authPersisConfig = {
    key: "auth",
    storage,
    whitelist: ["user", "accessToken", "refreshToken"]
}

const rootReducer = combineReducers({
    auth: persistReducer(authPersisConfig,authReducer),
    [baseApi.reducerPath]: baseApi.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(baseApi.middleware)
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
