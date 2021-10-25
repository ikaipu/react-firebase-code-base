import SystemErrorHandler from 'providers/error/SystemErrorHandler';
import React, { FC } from 'react';
import SignInContext from './SignInContext';
import useSignIn from './useSignIn';

export type SignInProviderProps = {
  children: React.ReactNode;
};

const SignInProvider: FC<SignInProviderProps> = ({
  children,
}: SignInProviderProps) => {
  const { requestState, setRequestState, signIn } = useSignIn();

  return (
    <SignInContext.Provider value={{ requestState, signIn }}>
      <SystemErrorHandler
        requestState={requestState}
        setRequestState={setRequestState}
      >
        {children}
      </SystemErrorHandler>
    </SignInContext.Provider>
  );
};
export default SignInProvider;
