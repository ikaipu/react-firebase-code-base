import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import { Primary as PostListPrimary } from 'components/organisms/PostList/index.stories';
import { PostHooksContext } from 'hooks/post';
import { Post } from 'domains/models/post';
import Component from '.';

export default {
  title: 'templates/Main',
  component: Component,
} as Meta;

const promise = () => new Promise(() => null);

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<{ usePosts: () => { posts: Post[] } }> = (args) => {
  return (
    <PostHooksContext.Provider
      value={{
        usePosts: args?.usePosts,
        usePostAction: () => ({
          createPost: () => new Promise(() => null),
        }),
      }}
    >
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component />
    </PostHooksContext.Provider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  usePosts: () => ({ posts: PostListPrimary.args?.posts ?? [] }),
};

export const Loading = Template.bind({});

Loading.args = {
  usePosts: () => {
    throw promise();
  },
};

export const ServerError = Template.bind({});

ServerError.args = {
  usePosts: () => {
    throw new Error();
  },
};
