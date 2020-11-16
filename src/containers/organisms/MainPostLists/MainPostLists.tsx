import React, { FC } from 'react';

import { usePosts } from 'hooks/post';
import MainPostLists from 'components/organisms/MainPostLists/MainPostLists';

const EnhancedMainPostLists: FC = () => {
  const { posts = [] } = usePosts();

  return <MainPostLists posts={posts} />;
};

export default EnhancedMainPostLists;
