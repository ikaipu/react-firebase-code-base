import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import Component, { Props } from './FormInput';

export default {
  title: 'molecules/FormInput',
  component: Component,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<Props> = (args) => <Component {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  icon: 'user',
  placeholder: 'Please input user ID',
  name: 'user',
};

export const Value = Template.bind({});

Value.args = {
  ...Primary.args,
  value: 'testaccount1234',
};

export const Error = Template.bind({});

Error.args = {
  ...Primary.args,
  error: 'required',
  touched: true,
};
