import {
  DocumentData,
  DocumentSnapshot,
  Unsubscribe,
} from '@firebase/firestore';
import Collection from 'infrastructure/firebase/firestore/collections/collection/Collection';
import { RequestState } from 'config/requestState';
import { User } from 'domains/User/User';
import UserFactory from 'domains/User/UserFactory';
import IUserRepository from './IUserRepository';

class UserFirestoreRepository implements IUserRepository {
  userCollection: Collection;

  constructor() {
    this.userCollection = new Collection('users');
  }

  public subscribeById = (
    id: string,
    setter: (data: User) => void,
    setRequestState: (requestState: RequestState) => void,
  ): Unsubscribe => {
    const converter = (snapshot: DocumentSnapshot<DocumentData>) => {
      const args = snapshot.data();

      return UserFactory.create(snapshot.id, args);
    };

    return this.userCollection.subscribeSpecific(
      id,
      setter,
      converter,
      setRequestState,
    );
  };

  public create = async (user: User): Promise<User> => {
    await this.userCollection.create(null, user.getProps());

    return user;
  };
}

export default UserFirestoreRepository;
