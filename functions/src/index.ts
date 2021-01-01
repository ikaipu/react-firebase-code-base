import admin from 'firebase-admin';
import * as Firestore from './firestore';
import serviceAccount from './code-base-firebase-adminsdk.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export const firestore = { ...Firestore };
