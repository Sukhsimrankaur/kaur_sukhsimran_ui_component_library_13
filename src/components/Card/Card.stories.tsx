import React from "react";
import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export const Default = (args: any) => <Card {...args} />;
Default.args = {
  title: "Card Title",
  content: "Card content goes here.",
  disabled: false,
};
