import SignUpProvider from 'providers/authenticate/SignUpProvider';
import React, { FC } from 'react';
import SignUpPage from './EnhancedSignUpPage';

const EnhancedSignUpPage: FC = () => {
  return (
    <SignUpProvider>
      <SignUpPage />
    </SignUpProvider>
  );
};

export default EnhancedSignUpPage;
