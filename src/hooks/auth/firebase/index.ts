import { AuthHooks } from 'hooks/auth';
import { useAuth as useAuthFire, useUser } from 'reactfire';
import { isAuth } from 'domains/models/auth';

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
  const auth = useAuthFire();
  // const firestore = useFirestore();
  // const fieldValue = useFirestore.FieldValue;

  const signIn = async (email: string, password: string) => {
    await auth
      .signInWithEmailAndPassword(email, password)
      .catch((error: Error & { code: string }) => {
        switch (error.code) {
          case 'auth/invalid-email': {
            throw new Error('正しいメールアドレスを入力して下さい');
          }
          case 'auth/user-disabled': {
            throw new Error('このアカウントは無効化されています');
          }
          case 'auth/user-not-found':
          case 'auth/wrong-password': {
            throw new Error(
              'メールアドレスもしくはパスワードが正しくありません',
            );
          }
          case 'auth/network-request-failed': {
            throw new Error('ネットワークエラーが発生しました');
          }
          case 'auth/user-token-expired': {
            throw new Error('トークンの期限切れです');
          }
          case 'auth/operation-not-allowed': {
            throw new Error('許可されていない操作です');
          }
          case 'auth/too-many-requests': {
            throw new Error('短期間で多くのリクエストが発生しました');
          }
          default: {
            console.log(error, error.message);
            throw error;
          }
        }
      });
  };
  const signUp = async (email: string, password: string) => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error: Error & { code: string }) => {
        switch (error.code) {
          case 'auth/invalid-email': {
            throw new Error('正しいメールアドレスを入力して下さい');
          }
          case 'auth/user-disabled': {
            throw new Error('このアカウントは無効化されています');
          }
          case 'auth/email-already-in-use': {
            throw new Error('メールアドレスはすでに使用されています');
          }
          case 'auth/weak-password': {
            throw new Error('パスワードが簡易的過ぎます');
          }
          case 'auth/network-request-failed': {
            throw new Error('ネットワークエラーが発生しました');
          }
          case 'auth/user-token-expired': {
            throw new Error('トークンの期限切れです');
          }
          case 'auth/operation-not-allowed': {
            throw new Error('許可されていない操作です');
          }
          case 'auth/too-many-requests': {
            throw new Error('短期間で多くのリクエストが発生しました');
          }
          default: {
            console.log(error, error.message);
            throw error;
          }
        }
      });

    // const user = credencial.user!;

    // const userRef = firestore.doc(`companies/${user.uid}`);

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
