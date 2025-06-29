import { render } from '@testing-library/react';
import { Card } from './Card';
import 'jest-styled-components';

test('renders visible card title and content', () => {
  const { getByText } = render(<Card title="Test Title" content="Test content" />);
  expect(getByText('Test Title')).toBeVisible();
  expect(getByText('Test content')).toBeVisible();
});

test('disabled card has reduced opacity', () => {
  const { getByText } = render(
    <Card title="Disabled" content="Content" disabled />
  );
  expect(getByText('Disabled')).toHaveStyle('opacity: 0.5');
});
