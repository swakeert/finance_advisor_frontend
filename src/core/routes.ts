enum Routes {
  HOME = '/',
  ABOUT = '/about-us',
  CONTACT = '/contact-us',
  LOG_IN = '/login',
  SIGN_UP = '/sign-up',
  DASHBOARD = '/dashboard',
  ERROR_404 = '/404-not-found',
  ERROR_40X = '/40X-unauthorized',
}

export enum ApiRoutes {
  LOGIN = '/auth/login/',
  REFRESH_TOKEN = '/auth/token/refresh/',
  CREATE_ADVISEE = '/advisees/',
  // READ_UPDATE_DETELE_INDIVIDUAL_ADVISEE = '/advisees/:number/',
  // ADVISEE_INDIVIDUAL_GOALS = '/advisees/:number/goals/',
  // API_SOMETHIGN = '/advisees/<int:advisee_id>/',
  // API_SOMETHIGN = '/advisors/',
  // API_SOMETHIGN = '/core/',
}

export default Routes;
