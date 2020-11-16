import React, { FC, useState } from 'react';

import { useAuthAction } from 'hooks/auth';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Register from 'components/pages/Register/Register';
import { useNavigate } from 'react-router';

const EnhancedRegister: FC = () => {
  const navigate = useNavigate();
  const { register } = useAuthAction();
  const [message, setMessage] = useState('');
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      password2: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid Email Address').required('Required'),
      password: Yup.string().required('Required'),
      password2: Yup.string()
        .oneOf([Yup.ref('password')], 'Password is not correct')
        .required('Required'),
    }),
    onSubmit: async (values: { email: string; password: string }) => {
      const { email, password } = values;
      setMessage('');
      await register(email, password).catch((error: Error) => {
        console.log(error);
        setMessage(error.message);
      });
    },
  });

  return (
    <Register
      touched={formik.touched}
      errors={formik.errors}
      values={formik.values}
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      onSubmit={formik.handleSubmit}
      errorMessage={message}
      goToLogin={() => navigate('login')}
    />
  );
};

export default EnhancedRegister;
