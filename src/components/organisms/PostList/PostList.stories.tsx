import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import Component, { Props } from './PostList';

export default {
  title: 'organisms/PostList',
  component: Component,
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<Props> = (args) => <Component {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'Featured Projects',
  posts: [
    {
      id: 'post1',
      title: "Dannie's Project",
      description:
        "Donnie had pretty well taken over the project as the chores of Bird Song limited Cynthia's time.",
    },
    {
      id: 'post2',
      title: 'Russian Policy',
      description:
        'In this way the development of Russian policy with regard to Turkey was checked for some years, but the project of confirming and extending the Russian protectorate over the Orthodox Christians was revived in 1852, when Napoleon III.',
    },
    {
      id: 'post3',
      title: 'A grandiose project',
      description:
        'This grandiose project was unexpectedly destroyed by the energetic resistance of Japan, who had ear-marked the Hermit Kingdom for herself, and who declared plainly that she would never tolerate the exclusive influence of Russia in Manchuria.',
    },
  ],
};
