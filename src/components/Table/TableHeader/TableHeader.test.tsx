import { render } from '@testing-library/react';
import { TableHeader } from './TableHeader';
import 'jest-styled-components';

test('renders visible table header', () => {
  const { getByText } = render(
    <table>
      <TableHeader>
        <tr><th>Header 1</th></tr>
      </TableHeader>
    </table>
  );
  expect(getByText('Header 1')).toBeVisible();
});

test('disabled table header is gray', () => {
  const { getByText } = render(
    <table>
      <TableHeader disabled>
        <tr><th>Header 1</th></tr>
      </TableHeader>
    </table>
  );
  expect(getByText('Header 1')).toHaveStyle('color: #999');
});
