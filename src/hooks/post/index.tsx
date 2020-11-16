import React from 'react';
import { useClient } from 'hooks/di';
import { Post } from 'domains/models/post';

export type PostHooks = {
  usePosts(): {
    posts: Post[];
  };
};

export const PostHooksContext = React.createContext<PostHooks | null>(null);

export const usePosts: PostHooks['usePosts'] = () => {
  const client = useClient(PostHooksContext);

  return client.usePosts();
};
