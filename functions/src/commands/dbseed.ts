import { program } from 'commander';
import admin from 'firebase-admin';
import fs from 'fs';
import parse from 'csv-parse/lib/sync';
import { Industry, isIndustries } from '../domains/models/industry';

import serviceAccount from '../code-base-firebase-adminsdk.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});
const db = admin.firestore();

const uploadSeed = async (collection: string, seedFile: string) => {
  const buffer = fs.readFileSync(seedFile);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const records: unknown[] = parse(buffer.toString(), {
    columns: true,
    delimiter: ',',
    skip_empty_lines: true,
  });
  const ref = db.collection(collection);
  switch (collection) {
    case 'industries': {
      if (!isIndustries(records)) {
        throw Error('Invalid Data Type');
      }
      const docs: Industry[] =
        records.map((record: Industry) => ({
          ...record,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        })) || [];
      for await (const doc of docs) {
        const { id, ...docWithoutId } = doc;
        await ref.doc(id!).set(docWithoutId);
      }

      return;
    }

    default: {
      throw new Error('specify target collection');
    }
  }
};
program
  .version('0.1.0', '-v, --version')
  .arguments('<collection> <seedFile>')
  .action(uploadSeed);
program.parse(process.argv);
