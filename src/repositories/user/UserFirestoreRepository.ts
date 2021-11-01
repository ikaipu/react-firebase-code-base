import {
  DocumentData,
  DocumentSnapshot,
  Unsubscribe,
} from '@firebase/firestore';
import Collection from 'infrastructure/firebase/firestore/collections/collection/Collection';
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
  ): Unsubscribe => {
    const converter = (snapshot: DocumentSnapshot<DocumentData>) => {
      const args = snapshot.data();

      return UserFactory.create(snapshot.id, args);
    };

    return this.userCollection.subscribeSpecific(id, setter, converter);
  };

  public create = async (user: User): Promise<User> => {
    await this.userCollection.create(user.getId(), user.getProps());

    return user;
  };
}

export default UserFirestoreRepository;
