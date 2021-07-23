import React from 'react';
import { useLocation } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';

export enum loginFormMessages {
  newUser = 'Please login with your new username/ password to continue',
  logout = 'Logged out successfully, please login again to continue',
  notLoggedIn = 'You are not logged in, please login to continue',
}

const LoginFormMessage = ({
  message,
}: {
  message: string;
}): React.ReactElement => <h2 className="heading">{message}</h2>;

const Login = (): React.ReactElement => {
  const location = useLocation();
  const { state } = location;
  return (
    <>
      <h1 className="heading">Login Page</h1>
      {state ? <LoginFormMessage message={state as string} /> : null}
      <LoginForm />
    </>
  );
};

export default Login;
