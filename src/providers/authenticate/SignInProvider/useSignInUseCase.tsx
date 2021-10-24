import { useState } from 'react';
import FirebaseAuthRepository from 'repository/auth/FirebaseAuthRepository';
import SignInUseCase from 'useCases/authentication/signIn/SignInUseCase';
import { checkInternetConnection } from 'utils/helpers/connection';
import ErrorHandler from 'errors/ErrorHandler/ErrorHandler';
import {
  createRequestState,
  RequestState,
  RequestStateType,
} from 'config/requestState';

const useSignInUseCase = (): {
  requestState: RequestState;
  setRequestState: (requestState: RequestState) => void;
  signIn: (email: string, password: string) => Promise<void>;
} => {
  const [requestState, setRequestState] = useState<RequestState>(
    createRequestState(RequestStateType.INITIAL),
  );

  // Repository, Auth
  const authRepository = new FirebaseAuthRepository();

  // UseCase
  const useCase = new SignInUseCase(authRepository);

  const signIn = async (email: string, password: string) => {
    setRequestState(createRequestState(RequestStateType.IS_LOADING));

    try {
      checkInternetConnection();

      await useCase.signIn(email, password);

      setRequestState(createRequestState(RequestStateType.SUCCESS));
    } catch (error) {
      const handler = new ErrorHandler(error, setRequestState);
      handler.setErrorState();
    }
  };

  return {
    requestState,
    setRequestState,
    signIn,
  };
};

export default useSignInUseCase;
