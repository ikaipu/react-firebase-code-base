import { BaseModel } from './BaseModel';
import { TimestampProps } from './TimeStampProps';

export class BaseModelWithTimestamp extends BaseModel {
  private createdAt: number;
  private updatedAt: number;

  constructor(id: string, props: TimestampProps) {
    super(id);
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  public getTimestampProps(): TimestampProps {
    return {
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
