import { createErrorRequestState, RequestState } from 'config/requestState';
import IErrorHandler from './IErrorHandler';
import { ErrorCodeType } from './ErrorCode.type';

interface ErrorWithCode extends Error {
  code: string;
}

const isErrorWithCode = (arg: unknown): arg is ErrorHandler => {
  const e = arg as ErrorWithCode;

  return (
    typeof e?.name === 'string' &&
    typeof e?.code === 'string' &&
    typeof e?.message === 'string'
  );
};

class ErrorHandler implements IErrorHandler {
  private code: string;

  private message: string;

  constructor(
    error: unknown,
    public setRequestState: (requestState: RequestState) => void,
  ) {
    if (!isErrorWithCode(error)) {
      console.error(error);
      throw new Error('unknown error type');
    }
    this.code = error.code;
    this.message = error.message;
  }

  public setErrorState = (): void => {
    if (process.env.NODE_ENV !== 'production')
      // eslint-disable-next-line no-console
      console.log(`Error(${this.code}) : ${this.message}`);

    switch (this.code) {
      // Invalid password ()
      case ErrorCodeType.FIREBASE_AUTH_WRONG_PASSWORD:
        this.setRequestState(
          createErrorRequestState(ErrorCodeType.FIREBASE_AUTH_WRONG_PASSWORD),
        );
        break;
      // Login
      case ErrorCodeType.FIREBASE_AUTH_USER_NOT_FOUND:
      case ErrorCodeType.AUTHENTICATION_LOGIN_INVALID:
      case ErrorCodeType.FIREBASE_AUTH_EMAIL_IN_USE:
        this.setRequestState(createErrorRequestState(this.code));
        break;
      // 408
      case ErrorCodeType.REQUEST_TIMEOUT_ERROR:
      case ErrorCodeType.FIREBASE_AUTH_NETWORK_FAILED:
        this.setRequestState(
          createErrorRequestState(ErrorCodeType.REQUEST_TIMEOUT_ERROR),
        );
        break;
      // 400 & 500
      case ErrorCodeType.CLIENT_ERROR:
      case ErrorCodeType.SERVER_ERROR:
        this.setRequestState(
          createErrorRequestState(ErrorCodeType.SERVER_ERROR),
        );
        break;
      default:
        this.setRequestState(
          createErrorRequestState(ErrorCodeType.SERVER_ERROR),
        );
    }
  };
}

export default ErrorHandler;
