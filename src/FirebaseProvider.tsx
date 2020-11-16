import React from 'react';

import { FirebaseAppProvider, preloadAuth, preloadFirestore } from 'reactfire';

import firebaseConfig from 'firebase-config';

const FirebasePreloader: React.FC = ({ children }) => {
  preloadAuth({
    setup: (auth) => {
      if (process.env.REACT_APP_FIREBASE_EMULATOR === 'true') {
        auth().useEmulator('http://localhost:9099');
      }
    },
  }).catch((e) => console.error(e));

  preloadFirestore({
    setup: (firestore) => {
      if (process.env.REACT_APP_FIREBASE_EMULATOR === 'true') {
        firestore().settings({
          host: 'localhost:8080',
          ssl: false,
          experimentalForceLongPolling: true,
        });
      }
    },
  }).catch((e) => console.error(e));

  return <>{children}</>;
};

const FirebaseProvider: React.FC = ({ children }) => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebasePreloader>{children}</FirebasePreloader>
    </FirebaseAppProvider>
  );
};

export default FirebaseProvider;
