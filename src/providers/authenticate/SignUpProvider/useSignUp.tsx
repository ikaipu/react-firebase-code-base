import { useState } from 'react';
import {
  createRequestState,
  RequestState,
  RequestStateType,
} from 'config/requestState';
import FirebaseAuthRepository from 'repositories/auth/FirebaseAuthRepository';
import SignUpUseCase from 'useCases/authentication/signUp/SignUpUseCase';
import { checkInternetConnection } from 'utils/helpers/connection';
import ErrorHandler from 'errors/ErrorHandler/ErrorHandler';

const useSignUpUseCase = (): {
  requestState: RequestState;
  setRequestState: (requestState: RequestState) => void;
  signUp: (email: string, password: string) => Promise<void>;
} => {
  const [requestState, setRequestState] = useState<RequestState>(
    createRequestState(RequestStateType.INITIAL),
  );

  // Repository, Auth
  const authRepository = new FirebaseAuthRepository();

  // UseCase
  const useCase = new SignUpUseCase(authRepository);

  const signUp = async (email: string, password: string) => {
    setRequestState(createRequestState(RequestStateType.IS_LOADING));

    try {
      checkInternetConnection();

      await useCase.signUp(email, password);

      setRequestState(createRequestState(RequestStateType.SUCCESS));
    } catch (error) {
      const handler = new ErrorHandler(error, setRequestState);
      handler.setErrorState();
    }
  };

  return {
    requestState,
    setRequestState,
    signUp,
  };
};

export default useSignUpUseCase;
