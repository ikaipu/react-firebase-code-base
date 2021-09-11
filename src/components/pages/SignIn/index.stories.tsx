import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import Component, { Props } from '.';

export default {
  title: 'pages/SignIn',
  component: Component,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<Props> = (args) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...args} />;
};

export const Primary = Template.bind({});

export const FormError = Template.bind({});

FormError.args = {
  errorMessage: 'Network error has occurred.',
};

export const ValidationError = Template.bind({});

ValidationError.args = {
  errors: {
    email: '無効なメールアドレスです',
    password: 'Input is required',
  },
  touched: {
    email: true,
    password: true,
  },
  values: {
    email: 'test',
    password: '',
  },
};
