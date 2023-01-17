import { render, screen } from '@testing-library/react';
import Career from '../pages/Career';

test('should render position component', () => {
  render(<Career />);
  const div = screen.getByTestId("div-wrapper");
  expect(div).toBeInTheDocument();
});
