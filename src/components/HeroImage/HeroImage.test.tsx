import { render } from '@testing-library/react';
import { HeroImage } from './HeroImage';

test('renders hero image title', () => {
  const { getByText } = render(
    <HeroImage backgroundUrl="/hero.jpg" title="Welcome!" />
  );
  expect(getByText('Welcome!')).toBeVisible();
});

test('renders subtitle when provided', () => {
  const { getByText } = render(
    <HeroImage backgroundUrl="/hero.jpg" title="Welcome!" subtitle="Enjoy your stay" />
  );
  expect(getByText('Enjoy your stay')).toBeVisible();
});
