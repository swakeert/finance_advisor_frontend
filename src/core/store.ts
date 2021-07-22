import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { adviseeSignUpReducer } from 'pages/AdviseeSignUp/adviseeSignUpSlice';
import { loginReducer } from 'pages/Login/loginSlice';

export const store = configureStore({
  reducer: { adviseeSignUpReducer, loginReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
