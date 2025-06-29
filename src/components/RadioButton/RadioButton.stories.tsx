import React from 'react';
import { RadioButton } from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
};

export const Default = (args: any) => <RadioButton {...args} />;
Default.args = {
  label: 'Option 1',
  disabled: false,
  checked: false,
};
