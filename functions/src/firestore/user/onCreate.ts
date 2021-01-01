import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
import { User } from '../../domains/models/user';
import { Base } from '../../domains/models/base';

type Params = Omit<User, keyof Base> & {
  createdAt: admin.firestore.Timestamp;
};

export default async (
  snapshot: functions.firestore.DocumentSnapshot,
  context: functions.EventContext,
) => {
  if (typeof context.params?.userId !== 'string') {
    return;
  }

  const { createdAt, ...params } = snapshot.data() as Params;

  const newParams = { ...params, updatedAt: createdAt };

  await admin
    .firestore()
    .doc(`companies/${context.params.userId}`)
    .update(newParams);
};
