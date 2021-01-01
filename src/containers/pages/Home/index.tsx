import Home from 'components/pages/Home';
import { useAuth } from 'hooks/auth';
import { useUser } from 'hooks/user';
import React, { FC } from 'react';
import { Navigate } from 'react-router';

const EnhancedHome: FC = () => {
  const { auth } = useAuth();

  const { user } = useUser(auth?.id);

  if (user === null) {
    return <Navigate to="/account" replace />;
  }

  return <Home />;
};

export default EnhancedHome;
