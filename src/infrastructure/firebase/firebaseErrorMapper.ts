import { ExceptionType } from 'errors/ErrorMessage/ErrorMessage';

class FirebaseErrorMapper {
  static mapErrorExceptionType(exceptionType: string): ExceptionType {
    switch (exceptionType) {
      case 'auth/email-already-in-use': {
        return ExceptionType.userExists;
      }
      case 'auth/invalid-email': {
        return ExceptionType.invalidEmail;
      }
      case 'auth/user-disabled': {
        return ExceptionType.userDisabled;
      }
      case 'auth/user-not-found':
      case 'auth/wrong-password': {
        return ExceptionType.wrongEmailOrPassword;
      }
      case 'auth/network-request-failed': {
        return ExceptionType.networkRequestFailed;
      }
      case 'auth/user-token-expired': {
        return ExceptionType.tokenExpired;
      }
      case 'auth/operation-not-allowed': {
        return ExceptionType.badRequest;
      }
      case 'auth/too-many-requests': {
        return ExceptionType.manyRequests;
      }
      default: {
        return ExceptionType.unknown;
      }
    }
  }
}

export default FirebaseErrorMapper;
