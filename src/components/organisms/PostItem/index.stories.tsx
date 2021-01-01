import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';
import Component, { Props } from '.';

export default {
  title: 'organisms/PostItem',
  component: Component,
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<Props> = (args) => <Component {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  name: 'ブロックチェーン（暗号通貨）DeFIシステムの開発',
  description:
    'ブロックチェーン（暗号通貨）DeFIシステムの開発投稿です。ブロックチェーン に詳しく、注目を集めている DeFI に詳しい方を探しております。',
  userName: '田中太郎',
};
