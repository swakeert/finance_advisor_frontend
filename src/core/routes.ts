export enum GlobalRoutes {
  HOME = '/',
  ABOUT = '/about-us',
  CONTACT = '/contact-us',
  LOGIN = '/login',
  SIGN_UP = '/sign-up',
  PRIVACY_POLICY = '/privacy-policy',
  TERMS_AND_CONDITIONS = '/terms-and-conditions',
  ERROR_404 = '/404-not-found',
  ERROR_40X = '/40X-unauthorized',
}

export enum DashboardRoutes {
  LOGOUT = '/logout',
  DASHBOARD = '/dashboard',
}

export enum ApiRoutes {
  LOGIN = '/auth/login/',
  REFRESH_TOKEN = '/auth/token/refresh/',
  CREATE_ADVISEE = '/advisees/',
  // READ_UPDATE_DETELE_INDIVIDUAL_ADVISEE = '/advisees/:number/',
  // ADVISEE_INDIVIDUAL_GOALS = '/advisees/:number/goals/',
  // API_SOMETHING = '/advisees/<int:advisee_id>/',
  // API_SOMETHING = '/advisors/',
  // API_SOMETHING = '/core/',
}
