import SystemErrorHandler from 'providers/error/SystemErrorHandler';
import React, { FC } from 'react';
import UserContext from './UserContext';
import useUser from './useUser';

export type UserProviderProps = {
  children: React.ReactNode;
};

const UserProvider: FC<UserProviderProps> = ({
  children,
}: UserProviderProps) => {
  const { user, requestState, setRequestState } = useUser();

  return (
    <UserContext.Provider value={{ user }}>
      <SystemErrorHandler
        requestState={requestState}
        setRequestState={setRequestState}
      >
        {children}
      </SystemErrorHandler>
    </UserContext.Provider>
  );
};
export default UserProvider;
