import SystemError from 'errors/SystemError/SystemError';
import InvalidDataFoundError from './InvalidDataFoundError';
import InvalidArgumentError from './InvalidArgumentError';
import {
  ERROR_MESSAGE,
  ErrorIdType,
  ExceptionType,
} from '../ErrorMessage/ErrorMessage';

class SystemErrorFactory {
  public static create = (
    code: string,
    message: string,
    type: ExceptionType,
  ): SystemError => {
    switch (type) {
      case ExceptionType.invalidArgument:
        return new InvalidArgumentError(code, message);
      case ExceptionType.invalidDataFound:
        return new InvalidDataFoundError(code, message);
      default:
        return new InvalidDataFoundError(
          '500',
          `Unknown ExceptionType ${type} is found at SystemErrorFactory.`,
        );
    }
  };

  public static createByErrorId = (
    errorId: ErrorIdType,
    params?: { [key: string]: string },
  ): SystemError => {
    const { code, message, type } = ERROR_MESSAGE[ErrorIdType[errorId]];

    switch (type) {
      case ExceptionType.invalidArgument:
        return new InvalidArgumentError(code, message, params);
      case ExceptionType.invalidDataFound:
        return new InvalidDataFoundError(code, message, params);
      default:
        return new InvalidDataFoundError(
          '500',
          `Unknown ExceptionType ${type} is found at SystemErrorFactory.`,
        );
    }
  };
}

export default SystemErrorFactory;
