import React from 'react';
import { Dropdown } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: 'array' },
    disabled: { control: 'boolean' },
  },
};

export const Default = (args: any) => <Dropdown {...args} />;
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  disabled: false,
};
