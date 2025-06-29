import React from 'react';
import { HeroImage } from './HeroImage';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    backgroundUrl: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
};

export const Default = (args: any) => <HeroImage {...args} />;
Default.args = {
  backgroundUrl: 'https://via.placeholder.com/1200x300',
  title: 'Welcome to Our Site',
  subtitle: 'Enjoy your stay',
};
