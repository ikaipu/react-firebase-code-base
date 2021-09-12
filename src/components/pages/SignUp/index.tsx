import React, { FC, FormEvent, SyntheticEvent } from 'react';
import Helmet from 'react-helmet';

import TextForm from 'components/templates/TextForm';
import { Message } from 'semantic-ui-react';
import A from 'components/atoms/A';

export interface Props {
  errorMessage: string;
  touched: {
    email?: boolean;
    password?: boolean;
    password2?: boolean;
  };
  errors: {
    email?: string;
    password?: string;
    password2?: string;
  };
  values: {
    email?: string;
    password?: string;
    password2?: string;
  };
  onBlur: (e: SyntheticEvent) => void;
  onChange: (e: SyntheticEvent) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  goToSignIn: () => void;
}

const SignUp: FC<Props> = (props) => {
  const {
    onBlur,
    onChange,
    onSubmit,
    touched = { email: false, password: false, password2: false },
    errors = { email: false, password: false, password2: false },
    values = { email: '', password: '', password2: '' },
    errorMessage = '',
    goToSignIn,
  } = props;

  return (
    <>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <TextForm
        headerTitle="Create your account"
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
            Or <A onClick={goToSignIn}>Login</A>
          </Message>
        }
      />
    </>
  );
};

export default SignUp;
