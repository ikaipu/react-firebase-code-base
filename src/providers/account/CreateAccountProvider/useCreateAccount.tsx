import { useState } from 'react';
import { checkInternetConnection } from 'utils/helpers/connection';
import ErrorHandler from 'errors/ErrorHandler/ErrorHandler';
import {
  createRequestState,
  RequestState,
  RequestStateType,
} from 'config/requestState';
import { UserProps } from 'domains/User/UserProps';
import UserFirestoreRepository from 'repositories/user/UserFirestoreRepository';
import CreateUserUseCase from 'useCases/account/createAccount/CreateAccountUseCase';

const useCreateAccountUseCase = (): {
  requestState: RequestState;
  setRequestState: (requestState: RequestState) => void;
  createAccount: (id: string, params: UserProps) => Promise<void>;
} => {
  const [requestState, setRequestState] = useState<RequestState>(
    createRequestState(RequestStateType.INITIAL),
  );

  // Repository, User
  const userRepository = new UserFirestoreRepository();

  // UseCase
  const useCase = new CreateUserUseCase(userRepository);

  const createAccount = async (id: string, params: UserProps) => {
    setRequestState(createRequestState(RequestStateType.IS_LOADING));

    try {
      checkInternetConnection();

      const user = useCase.create(id, params);

      await useCase.executeCreate(user);

      setRequestState(createRequestState(RequestStateType.SUCCESS));
    } catch (error) {
      const handler = new ErrorHandler(error, setRequestState);
      handler.setErrorState();
    }
  };

  return {
    requestState,
    setRequestState,
    createAccount,
  };
};

export default useCreateAccountUseCase;
