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
  createAccount: () => new Promise(() => undefined),
});

export default CreateAccountContext;
