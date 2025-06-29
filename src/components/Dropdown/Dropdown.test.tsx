import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';
import 'jest-styled-components';

test('renders visible dropdown', () => {
  render(<Dropdown options={['One', 'Two']} />);
  expect(screen.getByRole('combobox')).toBeVisible();
});

test('disabled dropdown has light background', () => {
  const { getByRole } = render(<Dropdown options={['A']} disabled />);
  expect(getByRole('combobox')).toHaveStyle('background: #eee');
});
