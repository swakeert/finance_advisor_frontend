import HomePage from 'pages/Home/Home';
import ContactUsPage from 'pages/ContactUs/ContactUs';
import AboutUsPage from 'pages/AboutUs/AboutUs';
import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DashboardRoutes, GlobalRoutes } from 'core/routes';
import Navigation from 'components/Navigation/Navigation';
import LoginPage from 'pages/Login/Login';
import AdviseeSignUpPage from 'pages/AdviseeSignUp/AdviseeSignUp';
import LogoutPage from 'pages/Logout/Logout';
import Footer from 'components/Footer/Footer';

export default (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Navigation />
      <main>
        <Switch>
          <Route path={GlobalRoutes.HOME} exact component={HomePage} />
          <Route path={GlobalRoutes.ABOUT} component={AboutUsPage} />
          <Route path={GlobalRoutes.CONTACT} component={ContactUsPage} />
          <Route path={GlobalRoutes.LOGIN} component={LoginPage} />
          <Route path={GlobalRoutes.SIGN_UP} component={AdviseeSignUpPage} />

          {/* <Route path={DashboardRoutes.DASHBOARD} component={DashboardPage} /> */}
          <Route path={DashboardRoutes.LOGOUT} component={LogoutPage} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
