import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  AuthError,
} from '@firebase/auth';
import UnauthorizedError from 'errors/ClientError/UnauthorizedError';
import { ErrorCodeType } from 'errors/ErrorHandler/ErrorCode.type';
import AuthFactory from 'domains/Auth/AuthFactory';
import { Auth } from 'domains/Auth/Auth';
import { Unsubscribe } from '@firebase/firestore';
import ServerErrorFactory from 'errors/ServerError/ServerErrorFactory';
import FirebaseErrorMapper from 'infrastructure/firebase/firebaseErrorMapper';
import IAuthRepository from './IAuthRepository';

class FirebaseAuthRepository implements IAuthRepository {
  public signUp = async (email: string, password: string): Promise<Auth> => {
    const firebaseAuth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password,
    ).catch((e: AuthError) => {
      const errorProps = {
        code: e.code,
        message: e.message,
        exceptionType: FirebaseErrorMapper.mapErrorExceptionType(e.code),
      };

      throw ServerErrorFactory.create(errorProps);
    });

    const authUser = userCredential.user;

    const token = await firebaseAuth.currentUser?.getIdTokenResult();

    if (!token) {
      throw new UnauthorizedError(
        ErrorCodeType.AUTHENTICATION_LOGIN_INVALID,
        '',
      );
    }
    const { uid } = authUser;

    const auth = AuthFactory.create(uid, {
      email,
      token: token?.token ?? '',
    });

    return auth;
  };

  public signIn = async (email: string, password: string): Promise<Auth> => {
    const firebaseAuth = getAuth();

    const userCredential = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password,
    ).catch((e: AuthError) => {
      const errorProps = {
        code: e.code,
        message: e.message,
        exceptionType: FirebaseErrorMapper.mapErrorExceptionType(e.code),
      };

      throw ServerErrorFactory.create(errorProps);
    });

    const authUser = userCredential.user;

    const token = await firebaseAuth.currentUser?.getIdTokenResult();

    if (!token) {
      throw new UnauthorizedError(
        ErrorCodeType.AUTHENTICATION_LOGIN_INVALID,
        '',
      );
    }
    const { uid } = authUser;

    const auth = AuthFactory.create(uid, {
      email,
      token: token?.token ?? '',
    });

    return auth;
  };

  public signOut = async (): Promise<void> => {
    const firebaseAuth = getAuth();

    await signOut(firebaseAuth).catch((e: AuthError) => {
      const errorProps = {
        code: e.code,
        message: e.message,
        exceptionType: FirebaseErrorMapper.mapErrorExceptionType(e.code),
      };

      throw ServerErrorFactory.create(errorProps);
    });
  };

  public subscribe = (setter: (data: Auth | null) => void): Unsubscribe => {
    const firebaseAuth = getAuth();
    try {
      return onAuthStateChanged(firebaseAuth, (user) => {
        if (!user || !user.email) {
          return setter(null);
        }
        const { uid, email } = user;

        const auth = AuthFactory.create(uid, { email });

        return setter(auth);
      });
    } catch (error: unknown) {
      const e = error as AuthError;

      const errorProps = {
        code: e.code,
        message: e.message,
        exceptionType: FirebaseErrorMapper.mapErrorExceptionType(e.code),
      };

      throw ServerErrorFactory.create(errorProps);
    }
  };
}

export default FirebaseAuthRepository;
