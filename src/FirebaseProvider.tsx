import React from 'react';

import {
  AuthProvider,
  FirebaseAppProvider,
  FirestoreProvider,
  useFirebaseApp,
} from 'reactfire';

import firebaseConfig from 'firebase-config';
import { connectAuthEmulator, getAuth } from '@firebase/auth';
import { connectFirestoreEmulator, getFirestore } from '@firebase/firestore';

const FirebasePreloader: React.FC = ({ children }) => {
  const app = useFirebaseApp();
  const firestore = getFirestore(app);
  const auth = getAuth(app);

  // Check for dev/test mode however your app tracks that.
  // `process.env.NODE_ENV` is a common React pattern
  if (process.env.NODE_ENV !== 'production') {
    // Set up emulators
    connectFirestoreEmulator(firestore, 'localhost', 8080);
    connectAuthEmulator(auth, 'http://localhost:9099');
  }

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>{children}</FirestoreProvider>
    </AuthProvider>
  );
};

const FirebaseProvider: React.FC = ({ children }) => (
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <FirebasePreloader>{children}</FirebasePreloader>
  </FirebaseAppProvider>
);

export default FirebaseProvider;
