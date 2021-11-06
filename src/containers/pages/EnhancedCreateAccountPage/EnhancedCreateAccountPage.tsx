import React, { FC, useContext } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Account, { AccountStringMap } from 'components/pages/Account';
import { RequestStateType } from 'config/requestState';
import CreateAccountContext from 'providers/account/CreateAccountProvider/CreateAccountContext';

const CreateAccount: FC = () => {
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
      const { name, address, phoneNumber, industry, description } = values;

      const params = {
        name: name!,
        address: address!,
        phoneNumber: phoneNumber === '' ? null : phoneNumber!,
        industry: industry!,
        description: description === '' ? null : description!,
      };

      await createAccount(params);
    },
  });

  const handleErrorMessage = () => {
    if (requestState !== RequestStateType.FAILED) {
      return '';
    }

    switch (requestState) {
      default:
        return requestState;
    }
  };

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
