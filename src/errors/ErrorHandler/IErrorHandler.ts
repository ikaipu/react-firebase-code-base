import { RequestState } from 'config/requestState';

interface IErrorHandler {
  setRequestState: (state: RequestState) => void;
  setErrorState(): void;
}

export default IErrorHandler;
