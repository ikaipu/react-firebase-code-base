/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  createRequestState,
  RequestState,
  RequestStateType,
} from 'config/requestState';
import { UserProps } from 'domains/User/UserProps';

export interface CreateAccountContextProps {
  requestState: RequestState;
  createAccount: (id: string, params: UserProps) => Promise<void>;
}

const CreateAccountContext = React.createContext<CreateAccountContextProps>({
  requestState: createRequestState(RequestStateType.INITIAL),
  createAccount: (id: string, params: UserProps) =>
    new Promise(() => undefined),
});

export default CreateAccountContext;
