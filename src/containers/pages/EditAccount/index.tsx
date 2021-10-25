import React, { FC, useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Account, { AccountStringMap } from 'components/pages/Account';
import { useUserAction, useUser } from 'hooks/user';
import { useAuth } from 'hooks/auth';
import { useNavigate } from 'react-router';

const EditAccount: FC = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { user } = useUser(auth?.id);
  const { editUser } = useUserAction();
  const [message, setMessage] = useState('');
  const [succeeded, setSucceeded] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: user?.name,
      address: user?.address,
      phoneNumber: String(user?.phoneNumber),
      industry: user?.industry,
      description: user?.description ?? '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      address: Yup.string().required(),
      phoneNumber: Yup.string(),
      industry: Yup.string().required(),
      description: Yup.string(),
    }),
    onSubmit: async (values: AccountStringMap) => {
      setMessage('');

      if (auth === null || user === null) {
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

      await editUser(id, params).catch((error: Error) => {
        console.log(error);
        setMessage(error.message);
      });

      setSucceeded(true);
    },
  });

  return (
    <Account
      touched={formik.touched}
      errors={formik.errors}
      values={formik.values}
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      onSubmit={formik.handleSubmit}
      errorMessage={message}
      onCloseModal={() => navigate(-1)}
      succeeded={succeeded}
    />
  );
};

export default EditAccount;
