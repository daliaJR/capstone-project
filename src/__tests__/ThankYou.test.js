import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ThankYou from '../pages/ThankYou';

test('should render Thank you page', () => {
  render(
    <BrowserRouter>
      <ThankYou />
    </BrowserRouter>
  );
  const thankYouPage = screen.getByTestId('thank-you-page');
  expect(thankYouPage).toBeInTheDocument();
});

describe('should render thank you page', () => {
  test('there should be button to home page', () => {
    render(
      <BrowserRouter>
        <ThankYou />
      </BrowserRouter>
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
// getByRole('heading', {level: 1})
describe('should render thank you page', () => {
  test('there should p h2 tag that include than you text', () => {
    render(
      <BrowserRouter>
        <ThankYou />
      </BrowserRouter>
    );
    const h2 = screen.getByRole('heading', { level: 2 });
    expect(h2).toBeInTheDocument();
    expect(h2).toHaveTextContent('THANK YOU!');
  });
});
describe('should render thank you page', () => {
  test('there should p tag that include some text', () => {
    render(
      <BrowserRouter>
        <ThankYou />
      </BrowserRouter>
    );
    const p = screen.getByTestId('paragraph');
    expect(p).toBeInTheDocument();
  });
});
