import React from "react";
import { TableCell } from "./TableCell";

export default {
  title: "Components/TableCell",
  component: TableCell,
  argTypes: {
    disabled: { control: "boolean" },
    content: { control: "text" },
  },
};

export const Default = (args: any) => (
  <table>
    <tbody>
      <tr>
        <TableCell {...args} />
      </tr>
    </tbody>
  </table>
);

Default.args = {
  content: "Cell content",
  disabled: false,
};
