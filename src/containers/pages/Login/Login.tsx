import React, { FC, useState } from 'react';

import { useAuthAction } from 'hooks/auth';
import Login from 'components/pages/Login/Login';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';

const EnhancedLogin: FC = () => {
  const navigate = useNavigate();
  const { login } = useAuthAction();
  const [message, setMessage] = useState('');
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid Email Address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values: { email: string; password: string }) => {
      const { email, password } = values;
      setMessage('');
      await login(email, password).catch((error: Error) => {
        console.log(error);
        setMessage(error.message);
      });
    },
  });

  return (
    <Login
      touched={formik.touched}
      errors={formik.errors}
      values={formik.values}
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      onSubmit={formik.handleSubmit}
      errorMessage={message}
      goToRegister={() => navigate('/register')}
    />
  );
};

export default EnhancedLogin;
