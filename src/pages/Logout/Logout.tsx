import React from 'react';
import LogoutForm from './LogoutForm/LogoutForm';

export const newUser = 'new-user';

const Logout = (): React.ReactElement => {
  return (
    <>
      <h1 className="heading">Logout Page</h1>
      <LogoutForm />
    </>
  );
};

export default Logout;
