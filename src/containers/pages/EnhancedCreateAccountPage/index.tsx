import React, { FC } from 'react';
import CreateAccountProvider from 'providers/account/CreateAccountProvider/CreateAccountContextProvider';
import RegisteredUserNavigateHandler from 'providers/navigation/RegisteredUserNavigateHandler';
import AuthProvider from 'providers/domain/AuthProvider';
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
