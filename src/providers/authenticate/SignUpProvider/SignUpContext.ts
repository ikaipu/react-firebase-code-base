import React from 'react';
import { RequestStateType } from 'config/requestState';

export interface SignUpContextProps {
  requestState: RequestStateType;
  signUp: (email: string, password: string) => Promise<void>;
}

const SignUpContext = React.createContext<SignUpContextProps>({
  requestState: RequestStateType.INITIAL,
  signUp: () => new Promise(() => undefined),
});

export default SignUpContext;
