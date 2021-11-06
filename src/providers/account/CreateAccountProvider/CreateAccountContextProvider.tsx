import SystemErrorHandler from 'providers/error/SystemErrorHandler';
import React, { FC } from 'react';
import CreateAccountContext from './CreateAccountContext';
import useCreateAccount from './useCreateAccount';

export type CreateAccountContextProviderProps = {
  children: React.ReactNode;
};

const CreateAccountContextProvider: FC<CreateAccountContextProviderProps> = ({
  children,
}: CreateAccountContextProviderProps) => {
  const { requestState, setRequestState, createAccount } = useCreateAccount();

  return (
    <CreateAccountContext.Provider value={{ requestState, createAccount }}>
      <SystemErrorHandler
        requestState={requestState}
        setRequestState={setRequestState}
      >
        {children}
      </SystemErrorHandler>
    </CreateAccountContext.Provider>
  );
};
export default CreateAccountContextProvider;
