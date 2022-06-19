import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { ApiRoutes } from 'core/routes';
import axiosInstance from 'core/axiosInstance';
import { newLogin } from 'core/userManagement';

import './FindAdvisorForm.scss';

// export type FindAdvisorData = {
//   // Step 1
//   name: string;
//   age: number;
//   email: string;
//   phone: number;

//   // Step 2
//   annualHouseholdIncome: number;
//   goals: number[];
//   existingInvestmentExperience: number[];

//   // Step 3
//   extra: string;
// };

// const validationSchema = yup.object({
//   name: yup.string().required('Please tell us what to call you.'),

//   age: yup
//     .number()
//     .required('Please tell us how old you are.')
//     .positive()
//     .integer(),

//   email: yup
//     .string()
//     .email('Please enter a valid email.')
//     .required('Please enter an email.'),

//   phone: yup
//     .string()
//     .required('Please enter a phone number.')
//     .matches(/^[0-9]+$/, 'Phone number must only be digits.')
//     .min(10, 'Phone number must be exactly 10 digit.')
//     .max(10, 'Phone number must be exactly 10 digit.'),

//   annualHouseholdIncome: yup
//     .string()
//     .email('Enter a valid email')
//     .required('Email is required'),

//   goals: yup
//     .string()
//     .email('Enter a valid email')
//     .required('Email is required'),

//   existingInvestmentExperience: yup
//     .string()
//     .email('Enter a valid email')
//     .required('Email is required'),

//   extra: yup
//     .string()
//     .email('Enter a valid email')
//     .required('Email is required'),
// });

export default (): React.ReactElement => {
  return <></>;
  // const dispatch = useDispatch();
  // const onSubmit = async (
  //   values: FindAdvisorData,
  //   actions: FormikHelpers<FindAdvisorData>
  // ): Promise<void> => {
  //   try {
  //     const { data } = await axiosInstance.post(ApiRoutes.LOGIN, values);
  //     dispatch(newLogin(data));
  //   } catch (e) {
  //     // TODO: Handle 404 and 5XX errors.
  //     actions.setErrors(e.response.status);
  //   }
  //   actions.setSubmitting(false);
  // };
  // return (
  //   <>
  //     {/* <Formik
  //       initialValues={{ username: '', password: '' }}
  //       validationSchema={validationSchema}
  //       onSubmit={onSubmit}
  //     >
  //       {({ isSubmitting }) => (
  //         <Form>
  //           <Field type="email" name="username" required />
  //           <ErrorMessage name="email" component="div" />
  //           <Field type="password" name="password" required />
  //           <ErrorMessage name="password" component="div" />
  //           <button type="submit" disabled={isSubmitting}>
  //             Submit
  //           </button>
  //         </Form>
  //       )}
  //     </Formik> */}
  // </>
  // );
};
