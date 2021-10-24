/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  createRequestState,
  RequestState,
  RequestStateType,
} from 'config/requestState';

export interface SignUpContextProps {
  requestState: RequestState;
  signUp: (email: string, password: string) => Promise<void>;
}

const SignUpContext = React.createContext<SignUpContextProps>({
  requestState: createRequestState(RequestStateType.INITIAL),
  signUp: (email: string, password: string) => new Promise(() => undefined),
});

export default SignUpContext;
