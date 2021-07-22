import React from 'react';
import { useLocation } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';

export const newUser = 'new-user';

const NewUserLoginMessage = (): React.ReactElement => (
  <h2 className="heading">
    Please login with your new username/ password to continue
  </h2>
);

const Login = (): React.ReactElement => {
  const location = useLocation();
  const { state } = location;
  return (
    <>
      <h1 className="heading">Login Page</h1>
      {state === newUser ? <NewUserLoginMessage /> : null}
      <LoginForm />
    </>
  );
};

export default Login;
