import React, { FC, useState } from 'react';

import { useAuthAction } from 'hooks/auth';
import SignIn from 'components/pages/SignIn';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';

const EnhancedSignIn: FC = () => {
  const navigate = useNavigate();
  const { signIn } = useAuthAction();
  const [message, setMessage] = useState('');
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
      setMessage('');
      await signIn(email, password).catch((error: Error) => {
        console.log(error);
        setMessage(error.message);
      });
    },
  });

  return (
    <SignIn
      touched={formik.touched}
      errors={formik.errors}
      values={formik.values}
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      onSubmit={formik.handleSubmit}
      errorMessage={message}
      goToSignUp={() => navigate('/sign-up')}
    />
  );
};

export default EnhancedSignIn;
