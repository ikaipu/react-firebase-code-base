import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import Component, { Props } from '.';

export default {
  title: 'pages/Home',
  component: Component,
} as Meta;

const Template: Story<Props> = (args) => {
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  return <Component {...args} />;
};

export const Primary = Template.bind({});
