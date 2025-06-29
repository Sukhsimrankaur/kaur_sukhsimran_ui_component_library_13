import { render } from '@testing-library/react';
import { Text } from './Text';
import 'jest-styled-components';

test('renders text', () => {
  const { getByText } = render(<Text content="Hello" />);
  expect(getByText('Hello')).toBeVisible();
});

test('disabled text has gray color', () => {
  const { getByText } = render(<Text content="Disabled" disabled />);
  expect(getByText('Disabled')).toHaveStyle('color: #aaa');
});
