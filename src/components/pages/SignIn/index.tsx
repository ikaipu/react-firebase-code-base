import React, { FC, FormEvent, SyntheticEvent } from 'react';
import Helmet from 'react-helmet';

import TextForm from 'components/templates/TextForm';
import { Message } from 'semantic-ui-react';
import A from 'components/atoms/A';

export type Props = {
  errorMessage: string;
  touched: {
    email?: boolean;
    password?: boolean;
  };
  errors: {
    email?: string;
    password?: string;
  };
  values: {
    email?: string;
    password?: string;
  };
  onBlur: (e: SyntheticEvent) => void;
  onChange: (e: SyntheticEvent) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  goToSignUp: () => void;
};

const SignIn: FC<Props> = (props) => {
  const {
    onBlur,
    onChange,
    onSubmit,
    touched = { email: false, password: false },
    errors = { email: false, password: false },
    values = { email: '', password: '' },
    errorMessage = '',
    goToSignUp,
  } = props;

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <TextForm
        headerTitle="Login to your account"
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
            Or <A onClick={goToSignUp}>Sign up</A>
          </Message>
        }
      />
    </>
  );
};

export default SignIn;
