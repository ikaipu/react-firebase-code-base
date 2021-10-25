import React, { FC, useContext } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Account, { AccountStringMap } from 'components/pages/Account';
import { useUser } from 'hooks/user';
import { useAuth } from 'hooks/auth';
import { Navigate } from 'react-router';

import { isUser } from 'domains/models/user';
import CreateAccountContext from 'providers/account/CreateAccountProvider/CreateAccountContext';
import { RequestStateType } from 'config/requestState';

const CreateAccount: FC = () => {
  const { auth } = useAuth();
  const { user } = useUser(auth?.id);
  const { createAccount, requestState } = useContext(CreateAccountContext);
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
      phoneNumber: Yup.string(),
      industry: Yup.string().required(),
      description: Yup.string(),
    }),
    onSubmit: async (values: AccountStringMap) => {
      if (auth === null) {
        return;
      }

      const { id } = auth;

      const { name, address, phoneNumber, industry, description } = values;

      const params = {
        name: name!,
        address: address!,
        phoneNumber: phoneNumber === '' ? null : phoneNumber!,
        industry: industry!,
        description: description === '' ? null : description!,
      };

      await createAccount(id, params);
    },
  });

  const handleErrorMessage = () => {
    if (requestState.state !== RequestStateType.FAILED) {
      return '';
    }

    switch (requestState.errorCode) {
      default:
        return requestState.errorCode;
    }
  };

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
      errorMessage={handleErrorMessage()}
    />
  );
};

export default CreateAccount;
