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
        <title>会員登録</title>
      </Helmet>
      <TextForm
        headerTitle="アカウントを新規作成"
        formElements={[
          {
            name: 'email' as const,
            type: 'email',
            icon: 'user',
            placeholder: 'Eメールアドレス',
          },
          {
            name: 'password' as const,
            type: 'password',
            icon: 'lock',
            placeholder: 'パスワード',
          },
          {
            name: 'password2' as const,
            type: 'password',
            icon: 'lock',
            placeholder: '確認用パスワード',
          },
        ]}
        submitButtonText="会員登録"
        touched={touched}
        errors={errors}
        values={values}
        errorMessage={errorMessage}
        onChange={onChange}
        onBlur={onBlur}
        onSubmit={onSubmit}
        bottomContent={
          <Message>
            登録済の方は <A onClick={goToSignIn}>ログイン</A>
          </Message>
        }
      />
    </>
  );
};

export default SignUp;
