import { render, screen } from '@testing-library/react';
import Position from '../components/Position';

test('should render position component', async () => {
  render(<Position />);
  const section = screen.getByTestId("section-wrapper");
  expect(section).toBeInTheDocument();
});

// test('should render position component', async () => {
//   render(<Position />);
//   const positionComponent = await screen.findAllByLabelText("position-section");
//   // const positionComponent = await screen.findByTestId("position-section", undefined, {timeout: 3000});
//   expect(positionComponent).toBeInTheDocument();
// });

