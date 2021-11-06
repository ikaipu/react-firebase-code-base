import React from 'react';
import { Auth } from 'domains/Auth/Auth';

export interface AuthContextProps {
  auth: Auth | null;
}

const AuthContext = React.createContext<AuthContextProps>({
  auth: null,
});

export default AuthContext;
