import { isEmpty } from 'lodash';
import ErrorMessageFactory from '../ErrorFactory/ErrorFactory';

class ClientError {
  public name = 'ClientError';

  public code: string;

  public message: string;

  constructor(
    code: string,
    message: string,
    params: { [key: string]: string } = {},
  ) {
    this.code = code;

    if (isEmpty(params)) this.message = message;
    else this.message = ErrorMessageFactory.create(message, params);
  }
}

export default ClientError;
