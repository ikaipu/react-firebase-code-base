import React, { FC, useContext } from 'react';

import SignIn from 'components/pages/SignIn';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import SignInContext from 'providers/authenticate/SignInProvider/SignInContext';
import { RequestStateType } from 'config/requestState';

const EnhancedSignIn: FC = () => {
  const navigate = useNavigate();
  const { signIn, requestState } = useContext(SignInContext);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
    onSubmit: async (values: { email: string; password: string }) => {
      const { email, password } = values;

      await signIn(email, password);
    },
  });

  const handleErrorMessage = () => {
    switch (requestState) {
      case RequestStateType.WRONG_EMAIL_OR_PASSWORD: {
        return 'Email address or password is wrong';
      }
      case RequestStateType.USER_DISABLED: {
        return 'This account is disabled';
      }

      default:
        return '';
    }
  };

  return (
    <SignIn
      touched={formik.touched}
      errors={formik.errors}
      values={formik.values}
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      onSubmit={formik.handleSubmit}
      errorMessage={handleErrorMessage()}
      goToSignUp={() => navigate('/sign-up')}
    />
  );
};

export default EnhancedSignIn;
