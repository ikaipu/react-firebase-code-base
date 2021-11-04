import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import Component from '.';
import Sample from '.';

export default {
  title: 'training/Sample',
  component: Sample,
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story = (args) => <Sample {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  Email: 1,
  Password: 3,
}