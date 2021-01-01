import React, { FC, useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import PostForm, { PostStringMap } from 'components/pages/PostForm';
import { usePostAction } from 'hooks/post';
import { useNavigate } from 'react-router';
import { useAuth } from 'hooks/auth';

const EnhancedPost: FC = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { createPost } = usePostAction();
  const [message, setMessage] = useState('');
  const [succeeded, setSucceeded] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      description: Yup.string(),
    }),
    onSubmit: async (values: PostStringMap) => {
      setMessage('');

      const { name, description } = values;
      if (auth === null) {
        return;
      }

      const params = {
        name: name!,
        description: description === '' ? null : description!,
        userId: auth.id,
      };

      await createPost(params).catch((error: Error) => {
        console.log(error);
        setMessage(error.message);
      });

      setSucceeded(true);
    },
  });

  return (
    <PostForm
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

export default EnhancedPost;
