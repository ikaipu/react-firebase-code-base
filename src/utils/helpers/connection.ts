import RequestTimeoutError from 'errors/ClientError/RequestTimeoutError';

/*
 * function checkInternetConnection
 *
 * return void
 *
 */
export const checkInternetConnection = (): void => {
  if (!window.navigator.onLine) throw new RequestTimeoutError();
};
