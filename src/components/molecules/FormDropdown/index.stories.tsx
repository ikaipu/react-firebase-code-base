import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import Component, { Props } from '.';

export default {
  title: 'molecules/FormDropdown',
  component: Component,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<Props> = (args) => <Component {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  options: [
    { key: 'it', value: 'it', text: 'IT関連' },
    {
      key: 'agriculture',
      value: 'agriculture',
      text: '農林',
    },
    { key: 'fisher', value: 'fisher', text: '漁業' },
  ],
  placeholder: '業界を選んで下さい',
  name: 'industry',
};

export const Value = Template.bind({});

Value.args = {
  ...Primary.args,
  value: 'fisher',
};

export const Error = Template.bind({});

Error.args = {
  ...Primary.args,
  error: '入力は必須です',
  touched: true,
};
