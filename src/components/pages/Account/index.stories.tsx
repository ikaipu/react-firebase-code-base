import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import Component, { Props } from '.';

export default {
  title: 'pages/Account',
  component: Component,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<Props> = (args) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  values: {},
  touched: {},
  errors: {},
};

export const FormError = Template.bind({});

FormError.args = {
  ...Primary.args,
  errorMessage: 'Network error has occurred.',
};

export const ValidationError = Template.bind({});

ValidationError.args = {
  ...Primary.args,
  errors: {
    name: 'Input is required',
    address: 'Input is required',
    phoneNumber: 'Input is required',
    industry: 'Input is required',
    description: 'Input is required',
  },
  touched: {
    name: true,
    address: true,
    phoneNumber: true,
    industry: true,
    description: true,
  },
  values: {},
};

export const Succeeded = Template.bind({});

Succeeded.args = {
  ...Primary.args,
  succeeded: true,
};
