import { render, screen } from '@testing-library/react';
import Contact from '../features/counter/Contact';

describe('Contact', () => {
  test('should render the header test', () => {
    render(<Contact />);
    const headerText = screen.getByTestId('headerText');
    expect(headerText).toBeDefined();
  });
});
