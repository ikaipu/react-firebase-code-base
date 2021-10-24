import { BaseModelWithTimestamp } from 'domains/BaseModel/BaseModelWithTimestamp';
import { UserProps } from './UserProps';

export class User extends BaseModelWithTimestamp {
  private name: string;
  private address: string;
  private phoneNumber: string | null;
  private industry: string;
  private description: string | null;

  constructor(id: string, props: UserProps) {
    super(id, props);
    this.name = props.name;
    this.address = props.address;
    this.phoneNumber = props.phoneNumber;
    this.industry = props.industry;
    this.description = props.description;
  }

  public getProps(): UserProps {
    return {
      id: this.getId(),
      name: this.name,
      address: this.address,
      phoneNumber: this.phoneNumber,
      industry: this.industry,
      description: this.description,
      ...this.getTimestampProps(),
    };
  }
}
