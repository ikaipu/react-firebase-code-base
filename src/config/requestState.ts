export enum RequestStateType {
  INITIAL = 'initial',
  IS_LOADING = 'isLoading',
  SUCCESS = 'success',
  FAILED = 'failed',
  INVALID_EMAIL = 'invalidEmail',
  USER_EXISTS = 'userExists',
  USER_DISABLED = 'userDisabled',
  WRONG_EMAIL_OR_PASSWORD = 'wrongEmailOrPassword',
  TOKEN_EXPIRED = 'tokenExpired',
}
