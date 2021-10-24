import SystemErrorHandler from 'providers/error/SystemErrorHandler';
import React, { FC } from 'react';
import SignInContext from './SignInContext';
import useSignInUseCase from './useSignInUseCase';

export type SignInProviderProps = {
  children: React.ReactNode;
};

const SignInProvider: FC<SignInProviderProps> = ({
  children,
}: SignInProviderProps) => {
  const { requestState, setRequestState, signIn } = useSignInUseCase();

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
