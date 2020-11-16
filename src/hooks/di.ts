import { useContext } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useClient = <T>(context: React.Context<T | null>): T => {
  const client = useContext(context);
  if (!client) {
    throw new Error('Failed to inject dependency');
  }

  return client;
};
