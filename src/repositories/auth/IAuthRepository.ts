import { Auth } from 'domains/Auth/Auth';

interface IAuthRepository {
  signUp: (email: string, password: string) => Promise<Auth>;
  signIn: (email: string, password: string) => Promise<Auth>;
  signOut: () => Promise<void>;
}

export default IAuthRepository;
