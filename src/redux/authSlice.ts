import { TUser } from "@/global/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: TUser | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        user: TUser;
        accessToken?: string;
        refreshToken?: string;
      }>
    ) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken || null;
      state.refreshToken = action.payload.refreshToken || null;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      window.location.href = "/login";
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
