import {
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  signInWithCustomToken,
  signOut,
  updatePassword,
} from '@firebase/auth';
import { executeWithTimeout } from '../../../utils/helpers/timeout';

const TIMEOUT = 10000;

const auth = getAuth();

export const firebaseSignOut = async (): Promise<void> => {
  return signOut(auth);
};

export const firebaseReauthenticate = async (
  email: string,
  password: string,
): Promise<void> => {
  const cred = EmailAuthProvider.credential(email, password);

  if (!auth.currentUser) throw new Error('auth/invalid-credential');

  const authUser = auth.currentUser;

  await executeWithTimeout(
    reauthenticateWithCredential(authUser, cred),
    TIMEOUT,
  );
};

export const reauthenticateByToken = async (token: string): Promise<void> => {
  await signInWithCustomToken(auth, token);
};

export const firebaseUpdatePassword = async (
  newPassword: string,
): Promise<void> => {
  if (!auth.currentUser) throw new Error('auth/invalid-credential');

  const authUser = auth.currentUser;

  await executeWithTimeout(updatePassword(authUser, newPassword), TIMEOUT);
};

export const getRefreshToken = async (): Promise<string> => {
  const { currentUser } = auth;

  if (!currentUser) return '';

  const newToken = await currentUser.getIdToken(true);

  return newToken;
};
