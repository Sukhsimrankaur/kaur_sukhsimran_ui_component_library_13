import { render } from '@testing-library/react';
import { TableFooter } from './TableFooter';
import 'jest-styled-components';

test('renders visible table footer', () => {
  const { getByText } = render(
    <table>
      <TableFooter>
        <tr><td>Footer content</td></tr>
      </TableFooter>
    </table>
  );
  expect(getByText('Footer content')).toBeVisible();
});

test('disabled table footer is gray', () => {
  const { getByText } = render(
    <table>
      <TableFooter disabled>
        <tr><td>Footer content</td></tr>
      </TableFooter>
    </table>
  );
  expect(getByText('Footer content')).toHaveStyle('color: #999');
});
