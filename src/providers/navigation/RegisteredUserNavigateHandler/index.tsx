import AuthProvider from 'providers/domain/AuthProvider';
import React, { FC } from 'react';
import RegisteredUserNavigateEffect from './RegisteredUserNavigateEffect';

export type RegisteredUserNavigateHandlerProps = {
  children: React.ReactNode;
};

const RegisteredUserNavigateHandler: FC<RegisteredUserNavigateHandlerProps> = ({
  children,
}) => {
  return (
    <AuthProvider>
      <RegisteredUserNavigateEffect>{children}</RegisteredUserNavigateEffect>
    </AuthProvider>
  );
};
export default RegisteredUserNavigateHandler;
