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
      <PostList title="注目の投稿" posts={posts} />
      <PostList title="新着の投稿" posts={posts} />
      <PostList title="応募中の投稿" posts={posts} />
    </>
  );
};

export default MainPostLists;
