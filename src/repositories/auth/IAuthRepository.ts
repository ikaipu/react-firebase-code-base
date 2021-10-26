import { Auth } from 'domains/Auth/Auth';

interface IAuthRepository {
  signUp: (email: string, password: string) => Promise<Auth>;
  signIn: (email: string, password: string) => Promise<Auth>;
  signOut: () => Promise<void>;
  subscribe: (setter: (data: Auth | null) => void) => () => void;
}

export default IAuthRepository;
