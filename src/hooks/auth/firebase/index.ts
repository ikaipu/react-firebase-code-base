import { AuthHooks } from 'hooks/auth';
import { useUser } from 'reactfire';
import { isAuth } from 'domains/models/auth';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from '@firebase/auth';

type FirebaseUser = {
  uid: string;
  email: string | null;
  emailVerified: boolean;
} | null;

const isFirebaseUser = (arg: unknown): arg is FirebaseUser => {
  const o = arg as FirebaseUser;

  return (
    o === null ||
    (typeof o?.uid === 'string' &&
      ['string', 'null'].includes(typeof o?.email) &&
      typeof o?.emailVerified === 'boolean')
  );
};

// eslint-disable-next-line import/prefer-default-export
export const useAuth: AuthHooks['useAuth'] = () => {
  const user = useUser();

  if (!isFirebaseUser(user)) {
    throw Error('API type error: FirebaseUser');
  }

  const auth = user !== null && { id: user.uid, email: user.email };

  if (!isAuth(auth)) {
    throw Error('API type error: Auth');
  }

  return { auth };
};

export const useAuthAction: AuthHooks['useAuthAction'] = () => {
  const auth = getAuth();
  // const firestore = useFirestore();
  // const fieldValue = useFirestore.FieldValue;

  const signIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password).catch(
      (error: Error & { code: string }) => {
        switch (error.code) {
          case 'auth/invalid-email': {
            throw new Error('Email address is invalid');
          }
          case 'auth/user-disabled': {
            throw new Error('This account is disabled');
          }
          case 'auth/user-not-found':
          case 'auth/wrong-password': {
            throw new Error('Email address or password is wrong');
          }
          case 'auth/network-request-failed': {
            throw new Error('Network error has occurred');
          }
          case 'auth/user-token-expired': {
            throw new Error('User token is expired');
          }
          case 'auth/operation-not-allowed': {
            throw new Error('Operation is not allowed');
          }
          case 'auth/too-many-requests': {
            throw new Error('There were too many request in a shot time');
          }
          default: {
            console.log(error, error.message);
            throw error;
          }
        }
      },
    );
  };
  const signUp = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password).catch(
      (error: Error & { code: string }) => {
        switch (error.code) {
          case 'auth/invalid-email': {
            throw new Error('Email address is invalid');
          }
          case 'auth/user-disabled': {
            throw new Error('This account is disabled');
          }
          case 'auth/email-already-in-use': {
            throw new Error('This email address is already used');
          }
          case 'auth/weak-password': {
            throw new Error('Password is too simple');
          }
          case 'auth/network-request-failed': {
            throw new Error('Network error has occurred');
          }
          case 'auth/user-token-expired': {
            throw new Error('User token is expired');
          }
          case 'auth/operation-not-allowed': {
            throw new Error('Operation is not allowed');
          }
          case 'auth/too-many-requests': {
            throw new Error('There were too many request in a shot time');
          }
          default: {
            console.log(error, error.message);
            throw error;
          }
        }
      },
    );

    // const user = credencial.user!;

    // const userRef = firestore.doc(`users/${user.uid}`);

    // return userRef
    //   .set({
    //     ...params,
    //     createdAt: fieldValue.serverTimestamp(),
    //     updatedAt: fieldValue.serverTimestamp(),
    //   })
    //   .catch((error) => {
    //     throw error;
    //   });
  };

  const signOut = async () => {
    await auth.signOut();
  };

  return { signIn, signOut, signUp };
};
