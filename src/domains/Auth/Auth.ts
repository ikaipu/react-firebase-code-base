import Joi from 'joi';

import { AuthProps, authPropsFormat } from './AuthProps';

export class Auth {
  private id: string;
  private email: string;

  constructor(id: string, props: AuthProps) {
    this.id = id;
    this.email = props.email;
  }

  public getId = (): string => this.id;

  public getProps = (): AuthProps => ({
    id: this.id,
    email: this.email,
  });
}

const isAuth = (args: unknown): args is Auth => {
  const auth = args as Auth;

  const result = Joi.object(authPropsFormat).validate(auth);

  return !result.error;
};

export { isAuth };
