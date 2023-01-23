import { render, screen } from '@testing-library/react';
import ThankYou from '../pages/ThankYou';

test('should render Thank you page', () => {
  render(<ThankYou />);
  const thankYouPage = screen.getByTestId('thank-you-page');
  expect(thankYouPage).toBeInTheDocument();
});

describe('should render thank you page', () => {
  test('there should be button to home page', () => {
    render(<ThankYou />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
// getByRole('heading', {level: 1})
describe('should render thank you page', () => {
  test('there should p h2 tag that include than you text', () => {
    render(<ThankYou />);
    const h2 = screen.getByRole('heading', { level: 2 });
    expect(h2).toBeInTheDocument();
    expect(h2).toHaveTextContent('THANK YOU!');
  });
});
describe('should render thank you page', () => {
  test('there should p tag that include some text', () => {
    render(<ThankYou />);
    const p = screen.getByTestId('paragraph');
    expect(p).toBeInTheDocument();
  });
});
