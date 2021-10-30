import { UserHooks, CreateUserParams } from 'hooks/user';
import { useFirestore, useFirestoreDocData } from 'reactfire';
import { isUser } from 'domains/models/user';
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  Timestamp,
} from '@firebase/firestore';

// eslint-disable-next-line import/prefer-default-export
export const useUser: UserHooks['useUser'] = (id = '1') => {
  const userDoc = doc(useFirestore(), 'users', id);

  const { data: firestoreUser } = useFirestoreDocData(userDoc);

  if (!firestoreUser) {
    return { user: null };
  }

  const createdAt = firestoreUser?.createdAt as Timestamp;
  const updatedAt = firestoreUser?.updatedAt as Timestamp;

  const user = {
    ...firestoreUser,
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

  const createUser = async (id: string, params: CreateUserParams) => {
    const userDoc = doc(firestore, 'users', id);

    await setDoc(userDoc, {
      ...params,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  };

  const editUser = async (id: string, params: CreateUserParams) => {
    const userDoc = doc(firestore, 'users', id);

    await new Promise((resolve) => {
      const now = Timestamp.now();

      const unsubscribe = onSnapshot(userDoc, (snapshot) => {
        const updatedAt = snapshot.data()?.updatedAt as Timestamp;
        if (now.toMillis() < updatedAt.toMillis()) {
          unsubscribe();
          resolve(null);
        }
      });

      const changeLogsCollection = collection(
        firestore,
        'users',
        id,
        'changeLogs',
      );
      void addDoc(changeLogsCollection, {
        ...params,
        createdAt: serverTimestamp(),
      });
    });
  };

  return { createUser, editUser };
};
