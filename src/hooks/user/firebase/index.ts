import { UserHooks, CreateUserParams } from 'hooks/user';
import { useFirestore, useFirestoreDoc } from 'reactfire';
import { isUser } from 'domains/models/user';
import { firestore as f } from 'firebase';

// eslint-disable-next-line import/prefer-default-export
export const useUser: UserHooks['useUser'] = (id = '') => {
  const userRef = useFirestore().doc(`users/${id}`);
  const doc = useFirestoreDoc(userRef);

  if (!doc.exists) {
    return { user: null };
  }

  const firebaseUser = doc.data();
  const createdAt = firebaseUser?.createdAt as f.Timestamp;
  const updatedAt = firebaseUser?.updatedAt as f.Timestamp;

  const user = {
    ...firebaseUser,
    id,
    createdAt: createdAt === null ? null : createdAt.toDate(),
    updatedAt: updatedAt === null ? null : updatedAt.toDate(),
  };

  if (!isUser(user)) {
    console.log(user);
    throw Error('API type error: User');
  }

  return { user };
};

export const useUserAction: UserHooks['useUserAction'] = () => {
  const firestore = useFirestore();
  const fieldValue = useFirestore.FieldValue;
  const timestamp = useFirestore.Timestamp;

  const createUser = async (id: string, params: CreateUserParams) => {
    const userRef = firestore.doc(`users/${id}`);

    await userRef.set({
      ...params,
      createdAt: fieldValue.serverTimestamp(),
      updatedAt: fieldValue.serverTimestamp(),
    });
  };

  const editUser = async (id: string, params: CreateUserParams) => {
    const userRef = firestore.doc(`users/${id}`);

    await new Promise((resolve) => {
      const now = timestamp.now();

      const unsubscribe = userRef.onSnapshot((snapshot) => {
        const updatedAt = snapshot.get('updatedAt') as f.Timestamp;
        if (now.toMillis() < updatedAt.toMillis()) {
          unsubscribe();
          resolve();
        }
      });

      const changeLogsRef = firestore.collection(`users/${id}/changeLogs`);
      void changeLogsRef.add({
        ...params,
        createdAt: fieldValue.serverTimestamp(),
      });
    });
  };

  return { createUser, editUser };
};
