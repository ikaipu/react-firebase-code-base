import UserCard from 'components/molecules/UserCard';
import { useAuth } from 'hooks/auth';
import { useUser } from 'hooks/user';
import React, { FC } from 'react';

type Props = {
  onClick: () => void;
};

const EnhancedUserCard: FC<Props> = (props) => {
  const { onClick } = props;
  const { auth } = useAuth();
  const { user } = useUser(auth?.id);

  if (user === null) {
    return <div />;
  }

  return <UserCard name={user.name} onClick={onClick} />;
};

export default EnhancedUserCard;
