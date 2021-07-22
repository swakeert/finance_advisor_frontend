import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'core/store';

import axios from 'axios';

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

export type AdviseeSignUp = {
  email: string;
  password: string;
  passwordConfirm: string;
};
export const adviseeSignUp = createAsyncThunk(
  'advisee/SignUp',
  async ({ email, password, passwordConfirm }: AdviseeSignUp, thunkAPI) => {
    try {
      await axios.post('/api/v1/advisees/', {
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
