import { Post } from 'domains/models/post';
import React from 'react';
import PostList from 'components/organisms/PostList';

export type Props = {
  posts: Post[];
};

const MainPostLists: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <>
      <PostList title="Pickups" posts={posts} />
      <PostList title="New Posts" posts={posts} />
      <PostList title="Applied Posts" posts={posts} />
    </>
  );
};

export default MainPostLists;
