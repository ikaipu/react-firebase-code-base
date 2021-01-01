import React from 'react';
import { useClient } from 'hooks/di';
import { User } from 'domains/models/user';
import { Base } from 'domains/models/base';

export type UserHooks = {
  useUser(
    id?: string,
  ): {
    user: User | null;
  };
  useUserAction(): {
    createUser: (id: string, params: CreateUserParams) => Promise<void>;
    editUser: (id: string, params: CreateUserParams) => Promise<void>;
  };
};

export type CreateUserParams = Omit<User, keyof Base>;

export const UserHooksContext = React.createContext<UserHooks | null>(null);

export const useUser: UserHooks['useUser'] = (id?: string) => {
  const client = useClient(UserHooksContext);

  return client.useUser(id);
};

export const useUserAction: UserHooks['useUserAction'] = () => {
  const client = useClient(UserHooksContext);

  return client.useUserAction();
};
