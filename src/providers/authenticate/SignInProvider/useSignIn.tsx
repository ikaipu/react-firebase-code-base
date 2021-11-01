import { useState } from 'react';
import FirebaseAuthRepository from 'repositories/auth/FirebaseAuthRepository';
import SignInUseCase from 'useCases/authentication/signIn/SignInUseCase';
import { checkInternetConnection } from 'utils/helpers/connection';
import { RequestStateType } from 'config/requestState';
import ServerError from 'errors/ServerError/ServerError';
import { ExceptionType } from 'errors/ErrorMessage/ErrorMessage';

const useSignInUseCase = (): {
  requestState: RequestStateType;
  setRequestState: (requestState: RequestStateType) => void;
  signIn: (email: string, password: string) => Promise<void>;
} => {
  const [requestState, setRequestState] = useState<RequestStateType>(
    RequestStateType.INITIAL,
  );

  // Repository, Auth
  const authRepository = new FirebaseAuthRepository();

  // UseCase
  const useCase = new SignInUseCase(authRepository);

  const signIn = async (email: string, password: string) => {
    setRequestState(RequestStateType.IS_LOADING);

    try {
      checkInternetConnection();

      await useCase.signIn(email, password);

      setRequestState(RequestStateType.SUCCESS);
    } catch (error) {
      if (error instanceof ServerError) {
        switch (error.exceptionType) {
          case ExceptionType.invalidEmail:
          case ExceptionType.wrongEmailOrPassword: {
            setRequestState(RequestStateType.WRONG_EMAIL_OR_PASSWORD);
            break;
          }
          case ExceptionType.userDisabled: {
            setRequestState(RequestStateType.USER_DISABLED);
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
    signIn,
  };
};

export default useSignInUseCase;
