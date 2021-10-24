export class BaseModel {
  private id: string;

  constructor(id: string) {
    this.id = id;
  }

  public getId = (): string => this.id;
}
