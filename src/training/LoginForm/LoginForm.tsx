// eslint-disable-file
import React, { FC, useState } from 'react';
import TextInputForm from '../TextInputForm/TextInputForm';

import {
  borderStyle,
  buttonStyle,
  containerStyle,
  labelStyle,
  loginFontStyle,
  marginAutoStyle,
} from './style';

const LoginForm: FC = () => {
  const [] = useState(true);

  return (
    <div style={containerStyle}>
      <h2 style={loginFontStyle}>Login</h2>
      <hr style={borderStyle} />
      <div>
        <TextInputForm
          label="Email"
          type="email"
          placeholder="メールアドレス"
        />
        <TextInputForm
          label="Password"
          type="password"
          placeholder="パスワード"
        />
        <div style={labelStyle}>
          <input type="checkbox" />
          パスワードを保存
        </div>
        <div style={marginAutoStyle}>
          <button type="button" style={buttonStyle}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
