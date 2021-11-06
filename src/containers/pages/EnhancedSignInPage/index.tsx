import SignInProvider from 'providers/authenticate/SignInProvider';
import React, { FC } from 'react';
import SignInPage from './EnhancedSignInPage';

const EnhancedSignInPage: FC = () => {
  return (
    <SignInProvider>
      <SignInPage />
    </SignInProvider>
  );
};

export default EnhancedSignInPage;
