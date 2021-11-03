import React, { FC } from 'react';
import CreateAccountProvider from 'providers/account/CreateAccountProvider';
import RegisteredUserNavigateHandler from 'providers/navigation/RegisteredUserNavigateHandler';
import AuthProvider from 'providers/authenticate/AuthProvider';
import CreateAccountPage from './EnhancedCreateAccountPage';

const EnhancedCreateAccountPage: FC = () => (
  <AuthProvider>
    <RegisteredUserNavigateHandler>
      <CreateAccountProvider>
        <CreateAccountPage />
      </CreateAccountProvider>
    </RegisteredUserNavigateHandler>
  </AuthProvider>
);

export default EnhancedCreateAccountPage;
