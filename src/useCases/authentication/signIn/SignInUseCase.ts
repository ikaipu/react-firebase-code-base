import { Auth } from 'domains/Auth/Auth';
import IAuthRepository from 'repository/auth/IAuthRepository';
import ISignInUseCase from './ISignInUseCase';

class SignInUseCase implements ISignInUseCase {
  private authRepository: IAuthRepository;

  constructor(authRepository: IAuthRepository) {
    this.authRepository = authRepository;
  }

  public signIn = async (email: string, password: string): Promise<Auth> => {
    const auth = await this.authRepository.signIn(email, password);

    return auth;
  };
}
export default SignInUseCase;
