import { useEffect, useState, useMemo } from 'react';
import FirebaseAuthRepository from 'repositories/auth/FirebaseAuthRepository';
import SubscribeAuthUseCase from 'useCases/authentication/subscribeAuth/SubscribeAuthUseCase';

import { Auth } from 'domains/Auth/Auth';
import { RequestStateType } from 'config/requestState';

const useAuth = (): {
  auth: null | Auth;
  requestState: RequestStateType;
  setRequestState: (requestState: RequestStateType) => void;
} => {
  // hooks
  const [auth, setAuth] = useState<Auth | null>(null);
  const [requestState, setRequestState] = useState<RequestStateType>(
    RequestStateType.INITIAL,
  );

  // Repository, Auth
  const authRepository = useMemo(() => new FirebaseAuthRepository(), []);

  // UseCase
  const useCase = useMemo(
    () => new SubscribeAuthUseCase(authRepository),
    [authRepository],
  );

  // useEffect
  useEffect(() => {
    setRequestState(RequestStateType.IS_LOADING);
    try {
      const unsubscribe = useCase.subscribeAuth(setAuth);

      setRequestState(RequestStateType.SUCCESS);

      return () => {
        unsubscribe();
      };
    } catch (e) {
      console.log(e);
      setRequestState(RequestStateType.FAILED);
    }

    return undefined;
  }, [useCase, setAuth]);

  return {
    auth,
    requestState,
    setRequestState,
  };
};

export default useAuth;
