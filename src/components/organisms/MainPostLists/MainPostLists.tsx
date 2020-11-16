import { Post } from 'domains/models/post';
import React from 'react';
import PostList from 'components/organisms/PostList/PostList';

export interface Props {
  posts: Post[];
}

const MainPostLists: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <>
      <PostList title="Featured Projects" posts={posts} />
      <PostList title="New Projects" posts={posts} />
      <PostList title="Applying Projects" posts={posts} />
    </>
  );
};

export default MainPostLists;
