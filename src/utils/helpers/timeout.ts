import RequestTimeoutError from 'errors/ClientError/RequestTimeoutError';

/*
 * function executeWithTimeout
 *
 * return void
 *    execute asyncFunc and
 *    fail (timeout) if timeout ms passes.
 *
 */

export const executeWithTimeout = async <T>(
  asyncFunc: Promise<T>,
  timeout: number,
): Promise<T> => {
  const promise = new Promise((resolve, reject) => {
    asyncFunc
      .then((res: T) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });

  const promiseTimeout = new Promise((resolve, reject) =>
    setTimeout(() => {
      reject(new RequestTimeoutError());
    }, timeout),
  );
  const result = await Promise.race([
    promise as Promise<T>,
    promiseTimeout,
  ]).catch((error) => {
    throw error;
  });

  return result as Promise<T>;
};
