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
  title: '注目の投稿',
  posts: [
    {
      id: 'post1',
      name: 'ブロックチェーン（暗号通貨）DeFIシステムの開発',
      description:
        'ブロックチェーン（暗号通貨）DeFIシステムの開発投稿です。ブロックチェーン に詳しく、注目を集めている DeFI に詳しい方を探しております。',
      postNum: 0,
      viewedNum: 0,
      userId: 'user1',
      createdAt: null,
      updatedAt: null,
    },
    {
      id: 'post2',
      name:
        'Google画像検索の自動化。自社メディアの画像を検索して引用元サイトを自動で発見・リストアップ。',
      description:
        '自社メディア（WordPress）上のオリジナル画像をGoogle画像検索をし、引用掲載している引用元のサイトを発見し、引用元URLをリストアップするまでの作業を自動化したいです。',
      postNum: 0,
      viewedNum: 0,
      userId: 'user1',
      createdAt: null,
      updatedAt: null,
    },
    {
      id: 'post3',
      name:
        'ペネトレーションテスト、脆弱性診断等に係るeラーニングの講師、コンテンツ制作のご依頼',
      description:
        'ネットワークまたはWebシステムに係るペネトレーションテスト、脆弱性診断、標的型攻撃（ホワイトハッカー）の領域で知見、経験があり、eラーニングの講師、コンテンツ制作にご興味がありましたら、ご一報ください。',
      postNum: 0,
      viewedNum: 0,
      userId: 'user1',
      createdAt: null,
      updatedAt: null,
    },
  ],
};
