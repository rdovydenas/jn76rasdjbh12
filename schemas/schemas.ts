import * as yup from 'yup';

export const RegisterSchema = yup
  .object({
    email: yup
      .string()
      .email('Email must be valid.')
      .required('Email is required.'),
    name: yup
      .string()
      .required('Name is required.')
      .min(2, 'Name is too short.'),
    surname: yup.string().required('Surname is required.'),
    password: yup
      .string()
      .required('Password is required.')
      .min(8, 'Your password is too short.'),
    confirmPassword: yup
      .string()
      .required('Retype your password.')
      .oneOf([yup.ref('password')], 'Your passwords do not match.'),
    referralCode: yup.string().notRequired(),
  })
  .required();

export const LoginSchema = yup
  .object({
    email: yup
      .string()
      .email('Email must be valid.')
      .required('Email is required.'),
    password: yup
      .string()
      .required('Password is required.')
      .min(8, 'Your password is too short.'),
  })
  .required();
