import React from 'react';
import { TableRow } from './TableRow';

export default {
  title: 'Components/TableRow',
  component: TableRow,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export const Default = (args: any) => (
  <table>
    <tbody>
      <TableRow {...args}>
        <td>Row 1 Cell 1</td><td>Row 1 Cell 2</td>
      </TableRow>
    </tbody>
  </table>
);
Default.args = {
  disabled: false,
};
