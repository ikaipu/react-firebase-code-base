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
    { key: 'it', value: 'it', text: 'IT' },
    {
      key: 'agriculture',
      value: 'agriculture',
      text: 'Agriculture',
    },
    { key: 'aquaculture', value: 'aquaculture', text: 'Aquaculture' },
  ],
  placeholder: 'Specify your industry',
  name: 'industry',
};

export const Value = Template.bind({});

Value.args = {
  ...Primary.args,
  value: 'aquaculture',
};

export const Error = Template.bind({});

Error.args = {
  ...Primary.args,
  error: 'Input is required',
  touched: true,
};
