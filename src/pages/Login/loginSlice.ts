import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'core/store';

import axiosInstance from 'core/axiosInstance';
import { ApiRoutes } from 'core/routes';

type Tokens = {
  access?: string;
  refresh?: string;
};

type LoginState = {
  success?: boolean;
  tokens: Tokens;
  error?: string;
};

export type LoginFormData = {
  username: string;
  password: string;
};
export const login = createAsyncThunk(
  'user/login',
  async ({ username, password }: LoginFormData, thunkApi) => {
    try {
      const { data } = await axiosInstance.post(ApiRoutes.LOGIN, {
        username,
        password,
      });
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data.detail);
    }
  }
);

const initialState: LoginState = { tokens: {} };

const loginSlice = createSlice({
  name: 'advisee/login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.error = undefined;
      state.tokens = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload as string;
      state.tokens = {};
    });
  },
});

export const loginReducer = loginSlice.reducer;

export const selectLoginError = (state: RootState): string | undefined =>
  state.loginReducer.error;

export const selectLoginSuccess = (state: RootState): boolean | undefined =>
  state.loginReducer.success;
