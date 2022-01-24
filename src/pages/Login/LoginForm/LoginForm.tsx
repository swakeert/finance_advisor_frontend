import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { ApiRoutes } from 'core/routes';
import axiosInstance from 'core/axiosInstance';
import { newLogin } from 'core/userManagement';

export type LoginFormData = {
  username: string;
  password: string;
};

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
  const dispatch = useDispatch();
  const onSubmit = async (
    values: LoginFormData,
    actions: FormikHelpers<LoginFormData>
  ): Promise<void> => {
    try {
      const { data } = await axiosInstance.post(ApiRoutes.LOGIN, values);
      dispatch(newLogin(data));
    } catch (e) {
      // TODO: Handle 404 and 5XX errors.
      actions.setErrors(e.response.status);
    }
    actions.setSubmitting(false);
  };

  return (
    <>
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
