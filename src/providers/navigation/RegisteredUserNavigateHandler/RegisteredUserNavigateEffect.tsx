import React, { FC, useContext } from 'react';
import { useUser } from 'hooks/user';
import { isUser } from 'domains/models/user';
import { Navigate } from 'react-router';
import AuthContext from 'providers/domain/AuthProvider/AuthContext';

export type RegisteredUserNavigateEffectProps = {
  children: React.ReactNode;
};

const RegisteredUserNavigateEffect: FC<RegisteredUserNavigateEffectProps> = ({
  children,
}: RegisteredUserNavigateEffectProps) => {
  const { auth } = useContext(AuthContext);
  const { user } = useUser(auth?.getId());

  if (user && isUser(user)) {
    return <Navigate to="/home" />;
  }

  return <>{children}</>;
};
export default RegisteredUserNavigateEffect;
