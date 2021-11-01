import SystemErrorFactory from 'errors/SystemError/SystemErrorFactory';
import Joi from 'joi';
import { ErrorIdType } from '../ErrorMessage/ErrorMessage';
import ServerError from './ServerError';

import { ServerErrorProps, serverErrorPropsFormat } from './ServerErrorProps';

class ServerErrorFactory {
  static create = (props: unknown): ServerError => {
    const serverErrorProps = props as ServerErrorProps;

    const result = Joi.object(serverErrorPropsFormat).validate(
      serverErrorProps,
    );

    if (result.error) {
      throw SystemErrorFactory.createByErrorId(
        ErrorIdType.INVALID_PROPS_ERROR_OBJECT_FACTORY,
        {
          domain: ServerError.name,
          reason: result.error.details[0].message,
        },
      );
    }

    return new ServerError(serverErrorProps);
  };
}

export default ServerErrorFactory;
