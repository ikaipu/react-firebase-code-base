import { ErrorCodeType } from 'errors/ErrorHandler/ErrorCode.type';

export enum RequestStateType {
  INITIAL = 'initial',
  IS_LOADING = 'isLoading',
  SUCCESS = 'success',
  FAILED = 'failed',
}

export type RequestState = {
  state: RequestStateType;
  errorCode: ErrorCodeType | '';
};

export const createRequestState = (state: RequestStateType): RequestState => {
  return {
    state,
    errorCode: '',
  };
};

export const createErrorRequestState = (
  errorCode: ErrorCodeType,
): RequestState => {
  return {
    state: RequestStateType.FAILED,
    errorCode,
  };
};
