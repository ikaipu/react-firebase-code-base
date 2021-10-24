import { Auth } from 'domains/Auth/Auth';
import IAuthRepository from 'repositories/auth/IAuthRepository';
import ISignUpUseCase from './ISignUpUseCase';

class SignUpUseCase implements ISignUpUseCase {
  private authRepository: IAuthRepository;

  constructor(authRepository: IAuthRepository) {
    this.authRepository = authRepository;
  }

  public signUp = async (email: string, password: string): Promise<Auth> => {
    const auth = await this.authRepository.signUp(email, password);

    return auth;
  };
}
export default SignUpUseCase;
