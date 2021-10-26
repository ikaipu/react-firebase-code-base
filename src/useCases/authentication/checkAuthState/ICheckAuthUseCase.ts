import { Auth } from 'domains/Auth/Auth';

interface ICheckAuthStateUseCase {
  checkAuthState: (setters: (auth: Auth | null) => void) => () => void;
}

export default ICheckAuthStateUseCase;
