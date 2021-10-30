import React, { FC } from 'react';
import AuthContext from './AuthContext';
import useAuth from './useAuth';

export type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: FC<AuthProviderProps> = ({
  children,
}: AuthProviderProps) => {
  const { auth } = useAuth();

  return (
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
