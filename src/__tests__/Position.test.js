import { render, screen } from '@testing-library/react';
import Position from '../components/Position';

test('should render position component', async () => {
  render(<Position />);
  const section = screen.getByTestId("section-wrapper");
  expect(section).toBeInTheDocument();
});
