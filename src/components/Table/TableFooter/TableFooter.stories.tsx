import React from 'react';
import { TableFooter } from './TableFooter';

export default {
  title: 'Components/TableFooter',
  component: TableFooter,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export const Default = (args: any) => (
  <table>
    <TableFooter {...args}>
      <tr><td>Footer content</td></tr>
    </TableFooter>
  </table>
);

Default.args = {
  disabled: false,
};
