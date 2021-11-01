import { ExceptionType } from 'errors/ErrorMessage/ErrorMessage';
import { ServerErrorProps } from './ServerErrorProps';

class ServerError {
  public name = 'ServerError';

  public code: string;

  public message: string;

  public exceptionType: ExceptionType;

  constructor(props: ServerErrorProps) {
    this.code = props.code;
    this.exceptionType = props.exceptionType;
    this.message = props.message;
  }
}

export default ServerError;
