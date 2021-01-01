import React from 'react';
import { useClient } from 'hooks/di';

export type AuthHooks = {
  useAuth(): {
    auth: { id: string; email: string } | null;
  };
  useAuthAction(): {
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
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
