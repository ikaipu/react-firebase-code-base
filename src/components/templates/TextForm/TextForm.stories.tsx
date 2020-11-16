import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import { Message } from 'semantic-ui-react';
import Component, { Props } from './TextForm';

export default {
  title: 'templates/TextForm',
  component: Component,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<Props> = (args) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  headerTitle: 'Log In',
  formElements: [
    {
      name: 'email' as const,
      type: 'email',
      icon: 'user',
      placeholder: 'Email Address',
    },
    {
      name: 'password' as const,
      type: 'password',
      icon: 'lock',
      placeholder: 'Password',
    },
  ],
  submitButtonText: 'Log In',
  bottomContent: (
    <Message>
      New to us? <a href="/register">Sign Up</a>
    </Message>
  ),
};

export const FormError = Template.bind({});

FormError.args = {
  ...Primary.args,
  errorMessage: 'Network Error Occurred',
};

export const ValidationError = Template.bind({});

ValidationError.args = {
  ...Primary.args,
  errors: {
    email: 'Invalid Email Address',
    password: 'Required',
  },
  touched: {
    email: true,
    password: true,
  },
  values: {
    email: 'test',
  },
};
