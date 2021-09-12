import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';
import Component, { Props } from '.';

export default {
  title: 'organisms/PostList',
  component: Component,
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<Props> = (args) => <Component {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'Pickups',
  posts: [
    {
      id: 'post1',
      name: 'Development of a blockchain (cryptocurrency) DeFI system',
      description:
        'This is a development post for a blockchain (cryptocurrency) DeFI system. We are looking for someone who is familiar with blockchain and is familiar with DeFI which is getting a lot of attention.',
      postNum: 0,
      viewedNum: 0,
      userId: 'user1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'post2',
      name:
        'Automated Google Image Search. Searches for images in your own media and automatically finds and lists citation source sites.',
      description:
        'I would like to automate the process of doing a Google image search for an original image on my media (WordPress), finding the cited source site, and listing the cited source URL.',
      postNum: 0,
      viewedNum: 0,
      userId: 'user1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'post3',
      name:
        'Request for e-learning instructors and content production related to penetration testing, vulnerability assessment, etc.',
      description:
        'If you have knowledge and experience in the areas of penetration testing, vulnerability assessment, and targeted attacks (white hackers) on networks or web systems, and are interested in becoming an e-learning instructor or content creator, please let us know.',
      postNum: 0,
      viewedNum: 0,
      userId: 'user1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
};
