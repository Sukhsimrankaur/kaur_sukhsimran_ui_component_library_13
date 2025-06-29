import { render } from '@testing-library/react';
import { Label } from './Label';
import 'jest-styled-components';

test('renders label with text', () => {
  const { getByText } = render(<Label text="Test Label" />);
  expect(getByText('Test Label')).toBeVisible();
});

test('disabled label has grey color', () => {
  const { getByText } = render(<Label text="Disabled Label" disabled />);
  expect(getByText('Disabled Label')).toHaveStyle('color: #999');
});
