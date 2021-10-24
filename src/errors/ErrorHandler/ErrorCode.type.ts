enum ErrorCodeType {
  // General
  CLIENT_ERROR = '400',
  UNAUTHORIZED_ERROR = '401',
  REQUEST_TIMEOUT_ERROR = '408',
  SERVER_ERROR = '500',

  AUTHENTICATION_LOGIN_INVALID = '401-0000',
  // Firebase
  FIREBASE_AUTH_RESET_PASSWORD_UNAUTHORIZED = 'reset_password/unauthorized',
  FIREBASE_AUTH_WRONG_PASSWORD = 'auth/wrong-password',
  FIREBASE_AUTH_NETWORK_FAILED = 'auth/network-request-failed',
  FIREBASE_AUTH_USER_NOT_FOUND = 'auth/user-not-found',
  FIREBASE_AUTH_EMAIL_IN_USE = 'auth/email-already-in-use',
}

export { ErrorCodeType };
