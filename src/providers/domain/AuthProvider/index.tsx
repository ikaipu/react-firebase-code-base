import SystemErrorHandler from 'providers/error/SystemErrorHandler';
import React, { FC } from 'react';
import AuthContext from './AuthContext';
import useAuth from './useAuth';

export type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: FC<AuthProviderProps> = ({
  children,
}: AuthProviderProps) => {
  const { auth, requestState, setRequestState } = useAuth();

  return (
    <AuthContext.Provider value={{ auth }}>
      <SystemErrorHandler
        requestState={requestState}
        setRequestState={setRequestState}
      >
        {children}
      </SystemErrorHandler>
    </AuthContext.Provider>
  );
};
export default AuthProvider;
