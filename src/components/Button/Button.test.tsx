import { render } from '@testing-library/react';
import { Button } from './Button';
import 'jest-styled-components';

test('renders visible button', () => {
  const { getByText } = render(<Button label="Test" />);
  expect(getByText('Test')).toBeVisible();
});

test('disabled button has grey background', () => {
  const { getByText } = render(<Button label="Disabled" disabled />);
  expect(getByText('Disabled')).toHaveStyle('background: #ccc');
});
