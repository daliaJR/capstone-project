import { render, screen } from '@testing-library/react';
import Career from '../pages/Career';

test('should render position component', async () => {
  render(<Career />);
  const div = await screen.findByTestId("div-wrapper");
  expect(div).toBeInTheDocument();
});
