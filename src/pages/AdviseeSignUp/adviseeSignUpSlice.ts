import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'core/store';

import axiosInstance from 'core/axiosInstance';
import { ApiRoutes } from 'core/routes';

type ApiErrors = { [key: string]: string[] };

type AdviseeSignUpState = {
  success?: boolean;
  errors: ApiErrors;
};

const initialState: AdviseeSignUpState = { success: undefined, errors: {} };

const adviseeSignUpSlice = createSlice({
  name: 'advisee/signUp',
  initialState,
  reducers: {
    success(state: AdviseeSignUpState) {
      state.success = true;
      state.errors = {};
    },
    errors(state: AdviseeSignUpState, action: PayloadAction<ApiErrors>) {
      state.success = false;
      state.errors = action.payload;
    },
  },
});

export const { success, errors } = adviseeSignUpSlice.actions;
export const adviseeSignUpReducer = adviseeSignUpSlice.reducer;

export const selectSignUpErrors = (state: RootState): ApiErrors =>
  state.adviseeSignUpReducer.errors;

export const selectSignUpSuccess = (state: RootState): boolean | undefined =>
  state.adviseeSignUpReducer.success;

export type AdviseeSignUpFormData = {
  email: string;
  password: string;
  passwordConfirm: string;
};
export const adviseeSignUp = createAsyncThunk(
  'advisee/SignUp',
  async (
    { email, password, passwordConfirm }: AdviseeSignUpFormData,
    thunkAPI
  ) => {
    try {
      await axiosInstance.post(ApiRoutes.CREATE_ADVISEE, {
        email,
        password,
        password2: passwordConfirm,
      });
      thunkAPI.dispatch(success());
    } catch (e) {
      thunkAPI.dispatch(errors(e.response.data));
    }
  }
);
