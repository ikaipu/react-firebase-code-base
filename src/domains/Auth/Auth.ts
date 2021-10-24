import { AuthProps } from './AuthProps';

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
