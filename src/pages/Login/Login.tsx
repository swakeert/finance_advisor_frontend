import { useAppSelector } from 'core/hooks';
import { DashboardRoutes } from 'core/routes';
import { selectIsLoggedIn } from 'core/userManagement';
import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';

export enum loginFormMessages {
  newUser = 'Please login with your new username/ password to continue',
  logout = 'Logged out successfully, please login again to continue',
  notLoggedIn = 'Please login to continue',
}

const LoginFormMessage = ({
  message,
}: {
  message: string;
}): React.ReactElement => <h2 className="heading">{message}</h2>;

const Login = (): React.ReactElement => {
  const location = useLocation();
  const { state } = location;

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? (
    <Redirect to={{ pathname: DashboardRoutes.DASHBOARD }} />
  ) : (
    <>
      <h1 className="heading">Login Page</h1>
      {state ? <LoginFormMessage message={state as string} /> : null}
      <LoginForm />
    </>
  );
};

export default Login;
