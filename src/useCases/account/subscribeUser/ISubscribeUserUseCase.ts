import { User } from 'domains/User/User';

interface ISubscribeUserUseCase {
  subscribeById: (
    id: string,
    setters: (user: User | null) => void,
  ) => () => void;
}

export default ISubscribeUserUseCase;
