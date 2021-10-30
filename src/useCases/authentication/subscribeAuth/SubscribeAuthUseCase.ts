import { Auth } from 'domains/Auth/Auth';
import IAuthRepository from 'repositories/auth/IAuthRepository';
import ISubscribeAuthUseCase from './ISubscribeAuthUseCase';

class SubscribeAuthUseCase implements ISubscribeAuthUseCase {
  private authRepository: IAuthRepository;

  constructor(authRepository: IAuthRepository) {
    this.authRepository = authRepository;
  }

  public subscribeAuth = (
    setter: (auth: Auth | null) => void,
  ): (() => void) => {
    const auth = this.authRepository.subscribe(setter);

    return auth;
  };
}
export default SubscribeAuthUseCase;
