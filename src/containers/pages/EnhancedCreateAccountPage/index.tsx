import React, { FC } from 'react';
import CreateAccountProvider from 'providers/account/CreateAccountProvider';
import AuthProvider from 'providers/authenticate/AuthProvider';
import CreateAccountPage from './EnhancedCreateAccountPage';

const EnhancedCreateAccountPage: FC = () => (
  <AuthProvider>
    <CreateAccountProvider>
      <CreateAccountPage />
    </CreateAccountProvider>
  </AuthProvider>
);

export default EnhancedCreateAccountPage;
