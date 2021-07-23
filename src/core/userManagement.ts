import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'core/store';

import getUserIdAndTypeFromToken, {
  UserType,
} from './utils/getUserIdAndTypeFromToken';

export type Tokens = {
  access: string;
  refresh: string;
};

type UserManagementState = {
  tokens?: Tokens;
  id?: number;
  userType?: UserType;
};

const initialState: UserManagementState = {};

const userManagementSlice = createSlice({
  name: 'userManagement',
  initialState,
  reducers: {
    newLogin: (state, action: PayloadAction<Tokens>) => {
      state.tokens = action.payload;
      const { id, userType } = getUserIdAndTypeFromToken(action.payload.access);
      state.id = id;
      state.userType = userType;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { newLogin, logout } = userManagementSlice.actions;
export const userManagementReducer = userManagementSlice.reducer;

export const selectIsLoggedIn = (state: RootState): boolean =>
  state.userManagementReducer.id !== undefined &&
  state.userManagementReducer.tokens?.access !== undefined;

export const selectAccessToken = (state: RootState): string | undefined =>
  state.userManagementReducer.tokens?.access;

export const selectRefreshToken = (state: RootState): string | undefined =>
  state.userManagementReducer.tokens?.refresh;

export const selectUserId = (state: RootState): number | undefined =>
  state.userManagementReducer.id;

export const selectUserType = (state: RootState): UserType | undefined =>
  state.userManagementReducer.userType;
