import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import { AuthHooksContext } from 'hooks/auth';
import { PostHooksContext } from 'hooks/post';
import { Primary as PostListPrimary } from 'components/organisms/PostList/index.stories';
import { UserHooksContext } from 'hooks/user';

import { MemoryRouter } from 'react-router';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};


export const decorators = [
  (Story) => (
    <MemoryRouter >
      <Story />
    </MemoryRouter>
  ),
  (Story) => (
    <AuthHooksContext.Provider
      value={{
        useAuth: () => ({
          auth: null,
        }),
        useAuthAction: () => ({
          signIn: () => new Promise(() => null),
          signOut: () => new Promise(() => null),
          signUp: () => new Promise(() => null),
        }),
      }}
    >
      <PostHooksContext.Provider
        value={{
          usePosts: () => ({
            posts: PostListPrimary.args?.posts ?? [],
          }),
          usePostAction: () => ({
            createPost: () => new Promise(() => null),
          }),
        }}
      >
        <UserHooksContext.Provider
          value={{
            useUser: () => ({
              user: {name: '田中太郎'},
            }),
            usePostAction: () => ({
              createPost: () => new Promise(() => null),
            }),
        }}>
          <Story />
        </UserHooksContext.Provider>
      </PostHooksContext.Provider>
    </AuthHooksContext.Provider>
  )
];
