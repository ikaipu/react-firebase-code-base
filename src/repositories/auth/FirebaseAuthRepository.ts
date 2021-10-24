import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from '@firebase/auth';
import UnauthorizedError from 'errors/ClientError/UnauthorizedError';
import { ErrorCodeType } from 'errors/ErrorHandler/ErrorCode.type';
import AuthFactory from 'domains/Auth/AuthFactory';
import { Auth } from 'domains/Auth/Auth';
import IAuthRepository from './IAuthRepository';

class FirebaseAuthRepository implements IAuthRepository {
  public signUp = async (email: string, password: string): Promise<Auth> => {
    const firebaseAuth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password,
    );

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
    );

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

    await signOut(firebaseAuth);
  };
}

export default FirebaseAuthRepository;
