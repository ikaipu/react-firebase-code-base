import { Auth } from 'domains/Auth/Auth';

interface ISignUpUseCase {
  signUp: (email: string, password: string) => Promise<Auth>;
}

export default ISignUpUseCase;
