import React from 'react';
import { Img } from './Img';

export default {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export const Default = (args: any) => <Img {...args} />;
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Sample image',
  disabled: false,
};
