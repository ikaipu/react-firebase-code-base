import { Auth } from 'domains/Auth/Auth';

interface ISignInUseCase {
  signIn: (email: string, password: string) => Promise<Auth>;
}

export default ISignInUseCase;
