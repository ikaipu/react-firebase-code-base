import React, { FC, useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Account, { AccountStringMap } from 'components/pages/Account';
import { useUserAction, useUser } from 'hooks/user';
import { useAuth } from 'hooks/auth';
import { Navigate } from 'react-router';

import { isUser } from 'domains/models/user';

const CreateAccount: FC = () => {
  const { auth } = useAuth();
  const { user } = useUser(auth?.id);
  const { createUser } = useUserAction();
  const [message, setMessage] = useState('');
  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      phoneNumber: '',
      industry: '',
      description: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      address: Yup.string().required(),
      phoneNumber: Yup.number(),
      industry: Yup.string().required(),
      description: Yup.string(),
    }),
    onSubmit: async (values: AccountStringMap) => {
      setMessage('');

      if (auth === null) {
        return;
      }

      const { id } = auth;

      const { name, address, phoneNumber, industry, description } = values;

      const params = {
        name: name!,
        address: address!,
        phoneNumber:
          typeof Number(phoneNumber) === 'number' ? Number(phoneNumber) : null,
        industry: industry!,
        description: description === '' ? null : description!,
        createdAt: Date(),
      };

      await createUser(id, params).catch((error: Error) => {
        console.log(error);
        setMessage(error.message);
      });
    },
  });

  if (user && isUser(user)) {
    return <Navigate to="/home" />;
  }

  return (
    <Account
      touched={formik.touched}
      errors={formik.errors}
      values={formik.values}
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      onSubmit={formik.handleSubmit}
      errorMessage={message}
    />
  );
};

export default CreateAccount;
