import SystemErrorHandler from 'providers/error/SystemErrorHandler';
import React, { FC } from 'react';
import CreateAccountContext from './CreateAccountContext';
import useCreateAccount from './useCreateAccount';

export type CreateAccountProviderProps = {
  children: React.ReactNode;
};

const CreateAccountProvider: FC<CreateAccountProviderProps> = ({
  children,
}: CreateAccountProviderProps) => {
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
export default CreateAccountProvider;
