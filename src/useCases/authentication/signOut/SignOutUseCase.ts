import IAuthRepository from 'repositories/auth/IAuthRepository';
import ISignOutUseCase from './ISignOutUseCase';

class SignOutUseCase implements ISignOutUseCase {
  private authRepository: IAuthRepository;

  constructor(authRepository: IAuthRepository) {
    this.authRepository = authRepository;
  }

  public signOut = async (): Promise<void> => {
    await this.authRepository.signOut();
  };
}
export default SignOutUseCase;
