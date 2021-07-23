import HomePage from 'pages/Home/Home';
import ContactUsPage from 'pages/ContactUs/ContactUs';
import AboutUsPage from 'pages/AboutUs/AboutUs';
import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routes from 'core/routes';
import Navigation from 'components/Navigation/Navigation';
import LoginPage from 'pages/Login/Login';
import AdviseeSignUpPage from 'pages/AdviseeSignUp/AdviseeSignUp';
import LogoutPage from 'pages/Logout/Logout';

export default (): React.ReactElement => {
  return (
    <BrowserRouter>
      <main>
        <Navigation />
        <Switch>
          <Route path={Routes.HOME} exact component={HomePage} />
          <Route path={Routes.ABOUT} component={AboutUsPage} />
          <Route path={Routes.CONTACT} component={ContactUsPage} />
          <Route path={Routes.LOGIN} component={LoginPage} />
          <Route path={Routes.SIGN_UP} component={AdviseeSignUpPage} />
          <Route path={Routes.LOGOUT} component={LogoutPage} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};
