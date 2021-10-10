import { ErrorIdType } from 'errors/ErrorMessage/ErrorMessage';
import SystemErrorFactory from 'errors/ErrorFactory/SystemErrorFactory';
import Joi from 'joi';
import { AuthProps, authPropsFormat } from './AuthProps';
import { Auth } from './Auth';

class AuthFactory {
  static create = (id: string, props: unknown): Auth => {
    const authProps = props as AuthProps;
    const result = Joi.object(authPropsFormat).validate({
      ...authProps,
      id,
    });

    if (result.error) {
      throw SystemErrorFactory.createByErrorId(
        ErrorIdType.INVALID_PROPS_DOMAIN_OBJECT_FACTORY,
        {
          domain: Auth.name,
          reason: result.error.details[0].message,
        },
      );
    }

    return new Auth(id, authProps);
  };
}

export default AuthFactory;
