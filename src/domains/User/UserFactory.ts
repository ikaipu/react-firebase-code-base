import { ErrorIdType } from 'errors/ErrorMessage/ErrorMessage';
import SystemErrorFactory from 'errors/SystemError/SystemErrorFactory';
import Joi from 'joi';
import IModelFactory from 'domains/BaseModel/IDomainFactory';
import { UserProps, userPropsFormat } from './UserProps';
import { User } from './User';

class UserFactory implements IModelFactory {
  static create = (id: string, props: unknown): User => {
    const userProps = props as UserProps;
    const result = Joi.object(userPropsFormat).validate({
      ...userProps,
      id,
    });

    if (result.error) {
      throw SystemErrorFactory.createByErrorId(
        ErrorIdType.INVALID_PROPS_DOMAIN_OBJECT_FACTORY,
        {
          domain: User.name,
          reason: result.error.details[0].message,
        },
      );
    }

    return new User(id, userProps);
  };
}

export default UserFactory;
