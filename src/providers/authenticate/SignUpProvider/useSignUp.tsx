import { useState } from 'react';
import { RequestStateType } from 'config/requestState';
import FirebaseAuthRepository from 'repositories/auth/FirebaseAuthRepository';
import SignUpUseCase from 'useCases/authentication/signUp/SignUpUseCase';
import { checkInternetConnection } from 'utils/helpers/connection';
import ServerError from 'errors/ServerError/ServerError';
import { ExceptionType } from 'errors/ErrorMessage/ErrorMessage';

const useSignUpUseCase = (): {
  requestState: RequestStateType;
  setRequestState: (requestState: RequestStateType) => void;
  signUp: (email: string, password: string) => Promise<void>;
} => {
  const [requestState, setRequestState] = useState<RequestStateType>(
    RequestStateType.INITIAL,
  );

  // Repository, Auth
  const authRepository = new FirebaseAuthRepository();

  // UseCase
  const useCase = new SignUpUseCase(authRepository);

  const signUp = async (email: string, password: string) => {
    setRequestState(RequestStateType.IS_LOADING);

    try {
      checkInternetConnection();

      await useCase.signUp(email, password);

      setRequestState(RequestStateType.SUCCESS);
    } catch (error) {
      if (error instanceof ServerError) {
        switch (error.exceptionType) {
          case ExceptionType.userExists: {
            setRequestState(RequestStateType.USER_EXISTS);
            break;
          }
          default: {
            console.log(error);
            setRequestState(RequestStateType.FAILED);
          }
        }
      } else {
        console.log(error);
        setRequestState(RequestStateType.FAILED);
      }
    }
  };

  return {
    requestState,
    setRequestState,
    signUp,
  };
};

export default useSignUpUseCase;
