import { render, screen } from '@testing-library/react';
import Tickets from '../components/Tickets';
import Payment from '../pages/Payment';

test('should render Thank you page', () => {
  render(<Payment />);
  const payementPage = screen.getByTestId('thank-you-page');
  expect(payementPage).toBeInTheDocument();
});

describe('should render thank you page', () => {
  test('there should be button to home page', () => {
    render(<Payment />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
describe('should render thank you page', () => {
  test('there should p h2 tag that include than you text', () => {
    render(<Payment />);
    const h2 = screen.getByRole('heading', { level: 2 });
    expect(h2).toBeInTheDocument();
    expect(h2).toHaveTextContent('Your saved cards');
  });
});
describe('should render thank you page', () => {
  test('there should p tag that include some text', () => {
    render(<ThankYou />);
    const p = screen.getByTestId('paragraph');
    expect(p).toHaveTextContent(
      'We only support cards as a payment method at the moment!'
    );
  });
});
