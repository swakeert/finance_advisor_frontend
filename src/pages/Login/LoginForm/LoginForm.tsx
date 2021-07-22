import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { login, LoginFormData, selectLoginError } from 'pages/Login/loginSlice';
import { useAppSelector } from 'core/hooks';
// import { Redirect } from 'react-router-dom';
// import Routes from 'core/routes';

const validationSchema = yup.object({
  username: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .required('Please enter a password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      'Must contain at least 8 Characters, one uppercase, one lowercase and one number'
    ),
});

const LoginForm = (): React.ReactElement => {
  const signUpApiError = useAppSelector(selectLoginError);
  // const signUpSuccess = useAppSelector(selectLoginSuccess);
  const dispatch = useDispatch();
  const onSubmit = (
    values: LoginFormData,
    actions: FormikHelpers<LoginFormData>
  ): void => {
    dispatch(login(values));
    actions.setSubmitting(false);
  };

  return (
    <>
      {signUpApiError && signUpApiError}
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="username" required />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" required />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
