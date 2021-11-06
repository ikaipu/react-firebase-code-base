import AuthProvider from 'providers/domain/AuthProvider';
import React, { FC } from 'react';
import CreateAccountContextProvider from './CreateAccountContextProvider';

export type CreateAccountProviderProps = {
  children: React.ReactNode;
};

const CreateAccountProvider: FC<CreateAccountProviderProps> = ({
  children,
}: CreateAccountProviderProps) => {
  return (
    <AuthProvider>
      <CreateAccountContextProvider>{children}</CreateAccountContextProvider>
    </AuthProvider>
  );
};
export default CreateAccountProvider;
