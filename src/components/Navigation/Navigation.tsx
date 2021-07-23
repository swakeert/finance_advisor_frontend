import Routes from 'core/routes';
import React from 'react';
import { Link } from 'react-router-dom';

export default (): React.ReactElement => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={Routes.HOME}>Home</Link>
        </li>
        <li>
          <Link to={Routes.ABOUT}>About Us</Link>
        </li>
        <li>
          <Link to={Routes.CONTACT}>Contact Us</Link>
        </li>

        {/* TODO: the following should work programatically */}
        <li>
          <Link to={Routes.LOGIN}>Login</Link>
        </li>
        <li>
          <Link to={Routes.SIGN_UP}>Sign Up</Link>
        </li>
        <li>
          <Link to={Routes.LOGOUT}>Logout</Link>
        </li>
      </ul>
    </nav>
  );
};
