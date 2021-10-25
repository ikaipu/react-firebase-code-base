import { User } from 'domains/User/User';
import { UserProps } from 'domains/User/UserProps';

interface ICreateAccountUseCase {
  create: (id: string, params: UserProps) => User;
  executeCreate: (user: User) => Promise<User>;
}

export default ICreateAccountUseCase;
