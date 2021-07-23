import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Routes from 'core/routes';

import { logout, selectIsLoggedIn } from 'core/userManagement';
import { useAppSelector } from 'core/hooks';
import { Redirect } from 'react-router-dom';
import { loginFormMessages } from 'pages/Login/Login';

const LogoutForm = (): React.ReactElement => {
  const [logoutSuccessful, setLogoutSuccesful] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const onSubmit = (): void => {
    dispatch(logout());
    setLogoutSuccesful(true);
  };

  const loginFormMessage = logoutSuccessful
    ? loginFormMessages.logout
    : loginFormMessages.notLoggedIn;
  return !isLoggedIn ? (
    <Redirect to={{ pathname: Routes.LOGIN, state: loginFormMessage }} />
  ) : (
    <form onSubmit={onSubmit}>
      <button type="submit">Logout</button>
    </form>
  );
};

export default LogoutForm;
