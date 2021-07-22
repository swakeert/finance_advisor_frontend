import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import {
  adviseeSignUp,
  AdviseeSignUpFormData,
  selectSignUpErrors,
  selectSignUpSuccess,
} from 'pages/AdviseeSignUp/adviseeSignUpSlice';
import { useAppSelector } from 'core/hooks';
import { Redirect } from 'react-router-dom';
import Routes from 'core/routes';
import { newUser } from 'pages/Login/Login';

const validationSchema = yup.object({
  email: yup
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
  passwordConfirm: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const AdviseeSignUpForm = (): React.ReactElement => {
  const signUpApiErrors = useAppSelector(selectSignUpErrors);
  const signUpSuccess = useAppSelector(selectSignUpSuccess);
  const dispatch = useDispatch();
  const onSubmit = (
    values: AdviseeSignUpFormData,
    actions: FormikHelpers<AdviseeSignUpFormData>
  ): void => {
    dispatch(adviseeSignUp(values));
    actions.setSubmitting(false);
  };

  return signUpSuccess ? (
    <Redirect to={{ pathname: Routes.LOG_IN, state: newUser }} />
  ) : (
    <Formik
      initialValues={{ email: '', password: '', passwordConfirm: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, touched }) => (
        <Form>
          <Field type="email" name="email" required />
          {signUpApiErrors.email && touched.email ? (
            <div>{signUpApiErrors.email}</div>
          ) : null}
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" required />
          {signUpApiErrors.password && touched.password ? (
            <div>{signUpApiErrors.password}</div>
          ) : null}
          <ErrorMessage name="password" component="div" />
          <Field type="password" name="passwordConfirm" required />
          {signUpApiErrors.password2 && touched.passwordConfirm ? (
            <div>{signUpApiErrors.password2}</div>
          ) : null}
          <ErrorMessage name="passwordConfirm" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <input type="reset" value="Reset" />
        </Form>
      )}
    </Formik>
  );
};

export default AdviseeSignUpForm;
