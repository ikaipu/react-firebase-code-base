import { Auth } from 'domains/Auth/Auth';

interface ISubscribeAuthUseCase {
  subscribeAuth: (setters: (auth: Auth | null) => void) => () => void;
}

export default ISubscribeAuthUseCase;
