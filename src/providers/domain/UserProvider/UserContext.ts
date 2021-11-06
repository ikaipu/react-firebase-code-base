import { User } from 'domains/User/User';
import React from 'react';

export interface UserContextProps {
  user: User | null;
}

const UserContext = React.createContext<UserContextProps>({
  user: null,
});

export default UserContext;
