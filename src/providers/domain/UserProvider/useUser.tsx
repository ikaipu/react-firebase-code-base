import { useEffect, useState, useMemo } from 'react';
import UserFirestoreRepository from 'repositories/user/UserFirestoreRepository';
import SubscribeUserUseCase from 'useCases/account/subscribeUser/SubscribeUserUseCase';

import { RequestStateType } from 'config/requestState';
import { User } from 'domains/User/User';

const useUser = (): {
  user: User | null;
  requestState: RequestStateType;
  setRequestState: (requestState: RequestStateType) => void;
} => {
  // hooks
  const [user, setUser] = useState<User | null>(null);
  const [requestState, setRequestState] = useState<RequestStateType>(
    RequestStateType.INITIAL,
  );

  // Repository, User
  const userRepository = useMemo(() => new UserFirestoreRepository(), []);

  // UseCase
  const useCase = useMemo(
    () => new SubscribeUserUseCase(userRepository),
    [userRepository],
  );

  // useEffect
  useEffect(() => {
    setRequestState(RequestStateType.IS_LOADING);
    if (user === null) {
      return undefined;
    }
    try {
      const unsubscribe = useCase.subscribeById(user.getId(), setUser);

      setRequestState(RequestStateType.SUCCESS);

      return () => {
        unsubscribe();
      };
    } catch (e) {
      console.log(e);
      setRequestState(RequestStateType.FAILED);
    }

    return undefined;
  }, [useCase, user, setUser]);

  return {
    user,
    requestState,
    setRequestState,
  };
};

export default useUser;
