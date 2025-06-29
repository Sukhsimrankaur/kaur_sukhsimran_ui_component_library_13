import React from 'react';
import { Label } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' }
  }
};

export const Default = (args: any) => <Label {...args} />;
Default.args = {
  text: 'Label Text',
  disabled: false
};
