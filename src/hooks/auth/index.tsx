import React from 'react';
import { useClient } from 'hooks/di';
import { User } from 'domains/models/user';

export type AuthHooks = {
  useAuth(): {
    user: User;
  };
  useAuthAction(): {
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
  };
};

export const AuthHooksContext = React.createContext<AuthHooks | null>(null);

export const useAuth: AuthHooks['useAuth'] = () => {
  const client = useClient(AuthHooksContext);

  return client.useAuth();
};

export const useAuthAction: AuthHooks['useAuthAction'] = () => {
  const client = useClient(AuthHooksContext);

  return client.useAuthAction();
};
