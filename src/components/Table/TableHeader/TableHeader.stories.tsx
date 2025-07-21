import React from "react";
import { TableHeader } from "./TableHeader";

export default {
  title: "Components/TableHeader",
  component: TableHeader,
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export const Default = (args: any) => (
  <table>
    <TableHeader {...args}>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
    </TableHeader>
  </table>
);
Default.args = {
  disabled: false,
};
