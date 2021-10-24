import React, { FC, useContext } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import SignUp from 'components/pages/SignUp';
import { useNavigate } from 'react-router';
import SignUpContext from 'providers/authenticate/SignUpProvider/SignUpContext';

import { ErrorCodeType } from 'errors/ErrorHandler/ErrorCode.type';
import { RequestStateType } from 'config/requestState';

const EnhancedSignUp: FC = () => {
  const navigate = useNavigate();
  const { signUp, requestState } = useContext(SignUpContext);
  const formik = useFormik({
    initialValues: { email: '', password: '', password2: '' },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
      password2: Yup.string()
        .oneOf([Yup.ref('password')])
        .required(),
    }),
    onSubmit: async (values: { email?: string; password?: string }) => {
      const { email, password } = values;

      await signUp(email!, password!);
    },
  });

  const handleErrorMessage = () => {
    if (requestState.state !== RequestStateType.FAILED) {
      return '';
    }

    switch (requestState.errorCode) {
      case ErrorCodeType.FIREBASE_AUTH_EMAIL_IN_USE: {
        return 'This email address is already used';
      }
      default:
        return requestState.errorCode;
    }
  };

  return (
    <SignUp
      touched={formik.touched}
      errors={formik.errors}
      values={formik.values}
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      onSubmit={formik.handleSubmit}
      errorMessage={handleErrorMessage()}
      goToSignIn={() => navigate('sign-in')}
    />
  );
};

export default EnhancedSignUp;
