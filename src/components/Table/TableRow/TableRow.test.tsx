import { render } from '@testing-library/react';
import { TableRow } from './TableRow';
import 'jest-styled-components';

test('renders visible table row', () => {
  const { getByText } = render(
    <table>
      <tbody>
        <TableRow>
          <td>Cell 1</td>
        </TableRow>
      </tbody>
    </table>
  );
  expect(getByText('Cell 1')).toBeVisible();
});

test('disabled table row is gray', () => {
  const { getByText } = render(
    <table>
      <tbody>
        <TableRow disabled>
          <td>Cell 1</td>
        </TableRow>
      </tbody>
    </table>
  );
  expect(getByText('Cell 1')).toHaveStyle('color: #999');
});
