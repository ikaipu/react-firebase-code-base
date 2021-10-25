import {
  collection,
  CollectionReference,
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  query as queryCollection,
  QueryDocumentSnapshot,
  setDoc,
  Transaction,
  where,
  WriteBatch,
  Unsubscribe,
  serverTimestamp,
} from '@firebase/firestore';
import { createErrorRequestState, RequestState } from 'config/requestState';
import { ErrorCodeType } from 'errors/ErrorHandler/ErrorCode.type';

class Collection {
  private collection: CollectionReference;

  constructor(path: string) {
    const firestore = getFirestore();
    this.collection = collection(firestore, path);
  }

  public getCollectionReference = (): CollectionReference => this.collection;

  public fetchAll = async (): Promise<QueryDocumentSnapshot[]> => {
    const snapshot = await getDocs(this.collection);

    return snapshot.docs;
  };

  public fetchSpecific = async (
    id: string,
    t?: Transaction,
  ): Promise<DocumentSnapshot | null> => {
    const reference = doc(this.collection, id);

    const document = t ? await t.get(reference) : await getDoc(reference);

    if (!document.exists) return null;

    return document;
  };

  public fetchOneByUniqueField = async (params: {
    [key: string]: string;
  }): Promise<QueryDocumentSnapshot | undefined> => {
    const conditions = Object.keys(params).map((key) => {
      return where(key, '==', params[key]);
    });

    const q = queryCollection(this.collection, ...conditions);

    const snapshot = await getDocs(q);

    if (snapshot.size > 1) throw new Error('more than 2 data found.');
    if (snapshot.size !== 1) return undefined;

    return snapshot.docs.pop();
  };

  public fetchByFields = async (params: {
    [key: string]: string;
  }): Promise<QueryDocumentSnapshot[]> => {
    const conditions = Object.keys(params).map((key) => {
      return where(key, '==', params[key]);
    });

    const q = queryCollection(this.collection, ...conditions);

    const snapshot = await getDocs(q);

    return snapshot.docs;
  };

  public create = async <T>(
    id: string | null,
    fields: Partial<T>,
    atomic?: Transaction | WriteBatch,
  ): Promise<void | Transaction | WriteBatch> => {
    const reference = id ? doc(this.collection, id) : doc(this.collection);

    const fieldsWithUpdatedTimestamp = {
      ...fields,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    if (!atomic) {
      const writeResult = await setDoc<DocumentData>(
        reference,
        fieldsWithUpdatedTimestamp,
      );

      return writeResult;
    }

    if (atomic instanceof Transaction) {
      const t = atomic;

      return t.set<DocumentData>(reference, fieldsWithUpdatedTimestamp);
    }

    if (atomic instanceof WriteBatch) {
      const batch = atomic;

      return batch.set<DocumentData>(reference, fieldsWithUpdatedTimestamp);
    }

    return undefined;
  };

  public update = async <T>(
    id: string,
    fields: T,
    atomic?: Transaction | WriteBatch,
  ): Promise<Transaction | WriteBatch | void> => {
    const docRef = doc(this.collection, id);

    const fieldsWithUpdatedTimestamp = {
      ...fields,
      updatedAt: serverTimestamp(),
    };

    if (!atomic) {
      return setDoc(docRef, fieldsWithUpdatedTimestamp, { merge: true });
    }

    if (atomic instanceof Transaction) {
      const t = atomic;
      const updateResult = t.set(docRef, fieldsWithUpdatedTimestamp, {
        merge: true,
      });

      return updateResult;
    }
    if (atomic instanceof WriteBatch) {
      const batch = atomic;
      const updateResult = batch.set(docRef, fieldsWithUpdatedTimestamp, {
        merge: true,
      });

      return updateResult;
    }

    return undefined;
  };

  public query = async <T extends string>(
    params: Array<{ key: T; value: string }>,
  ): Promise<QueryDocumentSnapshot[] | undefined> => {
    const conditions = params.map((param) => {
      return where(param.key, '==', param.value);
    });

    const q = queryCollection(this.collection, ...conditions);

    const snapshot = await getDocs(q);

    return snapshot.docs;
  };

  public subscribeAll = <T>(
    setter: (data: T) => void,
    converter: (docs: QueryDocumentSnapshot[]) => T,
    setRequestState: (requestState: RequestState) => void,
  ): Unsubscribe => {
    return onSnapshot(this.collection, (querySnapshot) => {
      try {
        setter(converter(querySnapshot.docs));
      } catch (error) {
        if (process.env.NODE_ENV !== 'production')
          // eslint-disable-next-line no-console
          console.log(error);
        setRequestState(createErrorRequestState(ErrorCodeType.SERVER_ERROR));
      }
    });
  };

  public subscribeSpecific = <T>(
    id: string,
    setter: (data: T) => void,
    converter: (doc: DocumentSnapshot) => T,
    setRequestState: (requestState: RequestState) => void,
  ): Unsubscribe => {
    const docRef = doc(this.collection, id);

    return onSnapshot(docRef, (d) => {
      try {
        setter(converter(d));
      } catch (error) {
        if (process.env.NODE_ENV !== 'production')
          // eslint-disable-next-line no-console
          console.log(error);
        setRequestState(createErrorRequestState(ErrorCodeType.SERVER_ERROR));
      }
    });
  };

  public subscribeNewData = <T>(
    setter: (data: T) => void,
    converter: (doc: DocumentSnapshot) => T,
    setRequestState: (requestState: RequestState) => void,
  ): Unsubscribe => {
    let state = 'initial';

    return onSnapshot(this.collection, (querySnapshot) => {
      if (state === 'initial') {
        state = 'ready';

        return;
      }
      querySnapshot.docChanges().forEach((change) => {
        try {
          if (change.type === 'added') setter(converter(change.doc));
        } catch (error) {
          if (process.env.NODE_ENV !== 'production')
            // eslint-disable-next-line no-console
            console.log(error);

          setRequestState(createErrorRequestState(ErrorCodeType.SERVER_ERROR));
        }
      });
    });
  };

  public subscribeOneByUniqueField = <T>(
    params: { [key: string]: string },
    setter: (data: T) => void,
    converter: (doc: DocumentSnapshot | null) => T,
    setRequestState: (requestState: RequestState) => void,
  ): Unsubscribe => {
    const conditions = Object.keys(params).map((key) => {
      return where(key, '==', params[key]);
    }, this.collection);

    const q = queryCollection(this.collection, ...conditions);

    return onSnapshot(q, (docs) => {
      try {
        if (docs.size > 1) throw new Error('more than 2 data found.');
        setter(converter(docs.empty ? null : docs.docs[0]));
      } catch (error) {
        if (process.env.NODE_ENV !== 'production')
          // eslint-disable-next-line no-console
          console.log(error);

        setRequestState(createErrorRequestState(ErrorCodeType.SERVER_ERROR));
      }
    });
  };

  subscribeSpecificWithNoData = <T>(
    id: string,
    setter: (data: T) => void,
    converter: (doc: DocumentSnapshot) => T,
    setRequestState: (requestState: RequestState) => void,
  ): Unsubscribe => {
    const docRef = doc(this.collection, id);

    return onSnapshot(docRef, (document: DocumentSnapshot) => {
      try {
        setter(converter(document));
      } catch (error) {
        if (process.env.NODE_ENV !== 'production')
          // eslint-disable-next-line no-console
          console.log(error);

        setRequestState(createErrorRequestState(ErrorCodeType.SERVER_ERROR));
      }
      setter(converter(document));
    });
  };

  public subscribeByFields = <T>(
    params: { [key: string]: string },
    setter: (data: T) => void,
    converter: (docs: QueryDocumentSnapshot[]) => T,
    setRequestState: (requestState: RequestState) => void,
  ): Unsubscribe => {
    const conditions = Object.keys(params).map((key) => {
      return where(key, '==', params[key]);
    });

    const q = queryCollection(this.collection, ...conditions);

    return onSnapshot(q, (snapshot) => {
      try {
        setter(converter(snapshot.docs));
      } catch (error) {
        if (process.env.NODE_ENV !== 'production')
          // eslint-disable-next-line no-console
          console.log(error);

        setRequestState(createErrorRequestState(ErrorCodeType.SERVER_ERROR));
      }
    });
  };
}

export default Collection;
