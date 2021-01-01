import functions from '../../base_function';

const path = '/companies/{userId}/changeLogs/{changeLogId}';

export const onCreate = functions()
  .firestore.document(path)
  .onCreate(async (snapshot, context) => {
    await (await import('./onCreate')).default(snapshot, context);
  });
