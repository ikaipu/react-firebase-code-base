import { Auth } from 'domains/Auth/Auth';
import IAuthRepository from 'repositories/auth/IAuthRepository';
import ICheckAuthStateUseCase from './ICheckAuthUseCase';

class CheckAuthStateUseCase implements ICheckAuthStateUseCase {
  private authRepository: IAuthRepository;

  constructor(authRepository: IAuthRepository) {
    this.authRepository = authRepository;
  }

  public checkAuthState = (
    setter: (auth: Auth | null) => void,
  ): (() => void) => {
    const auth = this.authRepository.subscribe(setter);

    return auth;
  };
}
export default CheckAuthStateUseCase;
