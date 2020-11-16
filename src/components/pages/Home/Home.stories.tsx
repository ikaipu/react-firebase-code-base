import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import { PostHooksContext } from 'hooks/post';
import { Primary as PostListPrimary } from 'components/organisms/PostList/PostList.stories';
import { AuthHooksContext } from 'hooks/auth';
import Component, { Props } from './Home';

export default {
  title: 'pages/Home',
  component: Component,
} as Meta;

const Template: Story<Props> = (args) => {
  return (
    <AuthHooksContext.Provider
      value={{
        useAuth: () => ({
          user: null,
        }),
        useAuthAction: () => ({
          login: () => new Promise(() => null),
          logout: () => new Promise(() => null),
          register: () => new Promise(() => null),
        }),
      }}
    >
      <PostHooksContext.Provider
        value={{
          usePosts: () => ({
            posts: PostListPrimary.args?.posts ?? [],
          }),
        }}
      >
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...args} />
      </PostHooksContext.Provider>
    </AuthHooksContext.Provider>
  );
};

export const Primary = Template.bind({});
