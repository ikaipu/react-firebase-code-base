import React from 'react';
import {
  createRequestState,
  RequestState,
  RequestStateType,
} from 'config/requestState';

export interface SignInContextProps {
  requestState: RequestState;
  signIn: (email: string, password: string) => Promise<void>;
}

const SignInContext = React.createContext<SignInContextProps>({
  requestState: createRequestState(RequestStateType.INITIAL),
  signIn: () => new Promise(() => undefined),
});

export default SignInContext;
