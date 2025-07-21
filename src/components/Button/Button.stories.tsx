import React from "react";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export const Default = (args: any) => <Button {...args} />;
Default.args = {
  label: "Click Me",
  disabled: false,
};
