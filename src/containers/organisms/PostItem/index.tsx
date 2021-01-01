import PostItem from 'components/organisms/PostItem';
import { useUser } from 'hooks/user';
import React from 'react';

export type Props = {
  name: string;
  description: string;
  userId: string;
};

const EnhancedPostItem: React.FC<Props> = (props) => {
  const { userId, name, description } = props;
  const { user } = useUser(userId);

  return (
    <PostItem
      name={name}
      description={description}
      userName={user?.name ?? ''}
    />
  );
};

export default EnhancedPostItem;
