import { useState } from 'react';
import { checkInternetConnection } from 'utils/helpers/connection';
import { RequestStateType } from 'config/requestState';
import { UserProps } from 'domains/User/UserProps';
import UserFirestoreRepository from 'repositories/user/UserFirestoreRepository';
import CreateUserUseCase from 'useCases/account/createAccount/CreateAccountUseCase';

const useCreateAccount = (): {
  requestState: RequestStateType;
  setRequestState: (requestState: RequestStateType) => void;
  createAccount: (id: string, params: UserProps) => Promise<void>;
} => {
  const [requestState, setRequestState] = useState<RequestStateType>(
    RequestStateType.INITIAL,
  );

  // Repository, User
  const userRepository = new UserFirestoreRepository();

  // UseCase
  const useCase = new CreateUserUseCase(userRepository);

  const createAccount = async (id: string, params: UserProps) => {
    setRequestState(RequestStateType.IS_LOADING);

    try {
      checkInternetConnection();

      const user = useCase.create(id, params);

      await useCase.executeCreate(user);

      setRequestState(RequestStateType.SUCCESS);
    } catch (error) {
      setRequestState(RequestStateType.FAILED);
    }
  };

  return {
    requestState,
    setRequestState,
    createAccount,
  };
};

export default useCreateAccount;
