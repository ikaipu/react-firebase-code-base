import CreateAccountProvider from 'providers/account/CreateAccountProvider';
import React, { FC } from 'react';
import CreateAccountPage from './EnhancedCreateAccountPage';

const EnhancedCreateAccountPage: FC = () => {
  return (
    <CreateAccountProvider>
      <CreateAccountPage />
    </CreateAccountProvider>
  );
};

export default EnhancedCreateAccountPage;
