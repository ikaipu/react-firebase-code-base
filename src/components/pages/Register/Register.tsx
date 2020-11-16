import React, { ChangeEvent, FC, FormEvent } from 'react';
import Helmet from 'react-helmet';

import TextForm from 'components/templates/TextForm/TextForm';
import { Message } from 'semantic-ui-react';
import A from 'components/atoms/A/A';

export interface Props {
  errorMessage?: string;
  touched?: {
    email?: boolean;
    password?: boolean;
    password2?: boolean;
  };
  errors?: {
    email?: string;
    password?: string;
    password2?: string;
  };
  values?: {
    email?: string;
    password?: string;
    password2?: string;
  };
  onBlur?: (e: FocusEvent) => void;
  onChange?: (e: ChangeEvent) => void;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  goToLogin: () => void;
}

const Register: FC<Props> = (props) => {
  const {
    onBlur,
    onChange,
    onSubmit,
    touched = { email: false, password: false, password2: false },
    errors = { email: false, password: false, password2: false },
    values = { email: '', password: '', password2: '' },
    errorMessage = '',
    goToLogin,
  } = props;

  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <TextForm
        headerTitle="Sign Up"
        formElements={[
          {
            name: 'email' as const,
            type: 'email',
            icon: 'user',
            placeholder: 'Email Address',
          },
          {
            name: 'password' as const,
            type: 'password',
            icon: 'lock',
            placeholder: 'Password',
          },
          {
            name: 'password2' as const,
            type: 'password',
            icon: 'lock',
            placeholder: 'Confirm Password',
          },
        ]}
        submitButtonText="Sign up"
        touched={touched}
        errors={errors}
        values={values}
        errorMessage={errorMessage}
        onChange={onChange}
        onBlur={onBlur}
        onSubmit={onSubmit}
        bottomContent={
          <Message>
            Already Signed Up? <A onClick={goToLogin}>Log In</A>
          </Message>
        }
      />
    </>
  );
};

export default Register;
