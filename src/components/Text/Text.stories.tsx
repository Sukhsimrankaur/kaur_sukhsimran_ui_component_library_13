import React from 'react';
import { Text } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export const Default = (args: any) => <Text {...args} />;
Default.args = {
  content: 'Sample text here',
  disabled: false,
};
