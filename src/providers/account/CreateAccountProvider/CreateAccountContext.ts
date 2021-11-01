import React from 'react';
import { RequestStateType } from 'config/requestState';
import { UserProps } from 'domains/User/UserProps';

export interface CreateAccountContextProps {
  requestState: RequestStateType;
  createAccount: (id: string, params: UserProps) => Promise<void>;
}

const CreateAccountContext = React.createContext<CreateAccountContextProps>({
  requestState: RequestStateType.INITIAL,
  createAccount: () => new Promise(() => undefined),
});

export default CreateAccountContext;
