import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';

import axiosInstance from 'core/axiosInstance';

import { Redirect } from 'react-router-dom';
import Routes, { ApiRoutes } from 'core/routes';
import { loginFormMessages } from 'pages/Login/Login';

export type AdviseeSignUpFormData = {
  email: string;
  password: string;
  password2: string;
};

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
  password2: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const AdviseeSignUpForm = (): React.ReactElement => {
  const [signUpWasSuccessful, setSignUpWasSuccessful] = useState(false);

  const onSubmit = async (
    values: AdviseeSignUpFormData,
    actions: FormikHelpers<AdviseeSignUpFormData>
  ): Promise<void> => {
    try {
      await axiosInstance.post(ApiRoutes.CREATE_ADVISEE, values);
      setSignUpWasSuccessful(true);
    } catch (e) {
      // TODO: Handle 404 and 5XX errors.
      actions.setErrors(e.response.data);
    }

    actions.setSubmitting(false);
  };

  return signUpWasSuccessful ? (
    <Redirect
      to={{ pathname: Routes.LOGIN, state: loginFormMessages.newUser }}
    />
  ) : (
    <Formik
      initialValues={{ email: '', password: '', password2: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" required />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" required />
          <ErrorMessage name="password" component="div" />
          <Field type="password" name="password2" required />
          <ErrorMessage name="password2" component="div" />
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
