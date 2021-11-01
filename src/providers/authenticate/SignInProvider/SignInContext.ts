import React from 'react';
import { RequestStateType } from 'config/requestState';

export interface SignInContextProps {
  requestState: RequestStateType;
  signIn: (email: string, password: string) => Promise<void>;
}

const SignInContext = React.createContext<SignInContextProps>({
  requestState: RequestStateType.INITIAL,
  signIn: () => new Promise(() => undefined),
});

export default SignInContext;
