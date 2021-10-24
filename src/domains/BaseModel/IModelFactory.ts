class IModelFactory {
  static create: <T>(id: string, props: unknown) => T;
}

export default IModelFactory;
