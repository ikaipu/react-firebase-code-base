interface IErrorHandler {
  setState: (state: string) => void;
  setErrorState(): void;
}

export default IErrorHandler;
