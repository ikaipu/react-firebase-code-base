import React, { FC, useState } from 'react';

import { useAuthAction } from 'hooks/auth';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SignUp from 'components/pages/SignUp';
import { useNavigate } from 'react-router';

const EnhancedSignUp: FC = () => {
  const navigate = useNavigate();
  const { signUp } = useAuthAction();
  const [message, setMessage] = useState('');
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
      setMessage('');

      const { email, password } = values;

      await signUp(email!, password!).catch((error: Error) => {
        console.log(error);
        setMessage(error.message);
      });
    },
  });

  return (
    <SignUp
      touched={formik.touched}
      errors={formik.errors}
      values={formik.values}
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      onSubmit={formik.handleSubmit}
      errorMessage={message}
      goToSignIn={() => navigate('sign-in')}
    />
  );
};

export default EnhancedSignUp;
