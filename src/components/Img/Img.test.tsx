import { render } from '@testing-library/react';
import { Img } from './Img';
import 'jest-styled-components';

test('renders visible image', () => {
  const { getByAltText } = render(<Img src="img.jpg" alt="Sample" />);
  expect(getByAltText('Sample')).toBeVisible();
});

test('disabled image has opacity', () => {
  const { getByAltText } = render(<Img src="img.jpg" alt="Sample" disabled />);
  expect(getByAltText('Sample')).toHaveStyle('opacity: 0.4');
});
