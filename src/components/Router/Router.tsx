import HomePage from 'pages/Home/Home';
import ContactUsPage from 'pages/ContactUs/ContactUs';
import AboutUsPage from 'pages/AboutUs/AboutUs';
import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routes from 'core/routes';
import Navigation from 'components/Navigation/Navigation';
import LoginPage from 'pages/Login/Login';
import AdviseeSignUpPage from 'pages/AdviseeSignUp/AdviseeSignUp';

export default (): React.ReactElement => {
  return (
    <BrowserRouter>
      <main>
        <Navigation />
        <Switch>
          <Route path={Routes.HOME} exact component={HomePage} />
          <Route path={Routes.ABOUT} component={AboutUsPage} />
          <Route path={Routes.CONTACT} component={ContactUsPage} />
          <Route path={Routes.LOG_IN} component={LoginPage} />
          <Route path={Routes.SIGN_UP} component={AdviseeSignUpPage} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};
