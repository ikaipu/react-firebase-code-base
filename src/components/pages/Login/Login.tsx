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
  };
  errors?: {
    email?: string;
    password?: string;
  };
  values?: {
    email?: string;
    password?: string;
  };
  onBlur?: (e: FocusEvent) => void;
  onChange?: (e: ChangeEvent) => void;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  goToRegister: () => void;
}

const Login: FC<Props> = (props) => {
  const {
    onBlur,
    onChange,
    onSubmit,
    touched = { email: false, password: false },
    errors = { email: false, password: false },
    values = { email: '', password: '' },
    errorMessage = '',
    goToRegister,
  } = props;

  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <TextForm
        headerTitle="Sign In"
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
        ]}
        submitButtonText="Login"
        touched={touched}
        errors={errors}
        values={values}
        errorMessage={errorMessage}
        onChange={onChange}
        onBlur={onBlur}
        onSubmit={onSubmit}
        bottomContent={
          <Message>
            New to us? <A onClick={goToRegister}>Sign Up</A>
          </Message>
        }
      />
    </>
  );
};

export default Login;
