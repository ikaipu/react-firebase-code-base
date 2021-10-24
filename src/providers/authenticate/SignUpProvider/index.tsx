import SystemErrorHandler from 'providers/error/SystemErrorHandler';
import React, { FC } from 'react';
import SignUpContext from './SignUpContext';
import useSignUp from './useSignUp';

export type SignUpProviderProps = {
  children: React.ReactNode;
};

const SignUpProvider: FC<SignUpProviderProps> = ({
  children,
}: SignUpProviderProps) => {
  const { requestState, setRequestState, signUp } = useSignUp();

  return (
    <SignUpContext.Provider value={{ requestState, signUp }}>
      <SystemErrorHandler
        requestState={requestState}
        setRequestState={setRequestState}
      >
        {children}
      </SystemErrorHandler>
    </SignUpContext.Provider>
  );
};
export default SignUpProvider;
