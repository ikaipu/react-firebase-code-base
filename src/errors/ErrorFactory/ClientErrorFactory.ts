import SystemError from 'errors/SystemError/SystemError';
import BadRequestError from '../ClientError/BadRequestError';
import UnauthorizedError from '../ClientError/UnauthorizedError';
import InvalidArgumentError from '../SystemError/InvalidArgumentError';
import {
  ERROR_MESSAGE,
  ErrorIdType,
  ExceptionType,
} from '../ErrorMessage/ErrorMessage';

class ClientErrorFactory {
  public static create = (
    code: string,
    message: string,
    type: ExceptionType,
  ): SystemError => {
    switch (type) {
      default:
        return new InvalidArgumentError(
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
      case ExceptionType.unauthorizedError:
        return new UnauthorizedError(code, message, params);
      case ExceptionType.badRequestError:
        return new BadRequestError(code, message, params);
      default:
        return new InvalidArgumentError(
          '500',
          `Unknown ExceptionType ${type} is found at SystemErrorFactory.`,
        );
    }
  };
}

export default ClientErrorFactory;