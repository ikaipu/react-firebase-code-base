import { useEffect, useState, useMemo } from 'react';
import FirebaseAuthRepository from 'repositories/auth/FirebaseAuthRepository';
import SubscribeAuthUseCase from 'useCases/authentication/subscribeAuth/SubscribeAuthUseCase';

import { Auth } from 'domains/Auth/Auth';

const useAuth = (): { auth: null | Auth } => {
  // hooks
  const [auth, setAuth] = useState(null as null | Auth);

  // Repository, Auth
  const authRepository = useMemo(() => new FirebaseAuthRepository(), []);

  // UseCase
  const useCase = useMemo(
    () => new SubscribeAuthUseCase(authRepository),
    [authRepository],
  );

  // useEffect
  useEffect(() => {
    const unsubscribe = useCase.subscribeAuth(setAuth);

    return () => {
      unsubscribe();
    };
  }, [useCase, setAuth]);

  return {
    auth,
  };
};

export default useAuth;
