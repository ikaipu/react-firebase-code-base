import React from 'react';
import { useClient } from 'hooks/di';
import { Post } from 'domains/models/post';
import { Base } from 'domains/models/base';

export type PostHooks = {
  usePosts(): {
    posts: Post[];
  };
  usePostAction(): {
    createPost: (params: CreatePostParams) => Promise<void>;
  };
};

export type CreatePostParams = Omit<Post, keyof Base | 'postNum' | 'viewedNum'>;

export const PostHooksContext = React.createContext<PostHooks | null>(null);

export const usePosts: PostHooks['usePosts'] = () => {
  const client = useClient(PostHooksContext);

  return client.usePosts();
};

export const usePostAction: PostHooks['usePostAction'] = () => {
  const client = useClient(PostHooksContext);

  return client.usePostAction();
};
