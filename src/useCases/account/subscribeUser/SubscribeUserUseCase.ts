import { User } from 'domains/User/User';
import IUserRepository from 'repositories/user/IUserRepository';
import ISubscribeUserUseCase from './ISubscribeUserUseCase';

class SubscribeUserUseCase implements ISubscribeUserUseCase {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public subscribeById = (
    id: string,
    setter: (user: User | null) => void,
  ): (() => void) => {
    const user = this.userRepository.subscribeById(id, setter);

    return user;
  };
}
export default SubscribeUserUseCase;
