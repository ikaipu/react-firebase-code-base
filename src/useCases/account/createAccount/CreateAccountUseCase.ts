import { User } from 'domains/User/User';
import UserFactory from 'domains/User/UserFactory';
import { UserProps } from 'domains/User/UserProps';
import IUserRepository from 'repositories/user/IUserRepository';
import ICreateAccountUseCase from './ICreateAccountUseCase';

class CreateAccountUseCase implements ICreateAccountUseCase {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public create = (id: string, params: UserProps): User => {
    const user = UserFactory.create(id, params);

    return user;
  };

  public executeCreate = (user: User): Promise<User> => {
    console.log(user);

    return this.userRepository.create(user);
  };
}
export default CreateAccountUseCase;
