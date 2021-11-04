import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import TextInputForm from './TextInputForm';

export default {
  title: 'tutorial/TextInputForm',
  component: TextInputForm,
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story = (args) => <TextInputForm {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  placeholder: 'メールアドレス',
  type: 'email',
  label: 'Email',
};
