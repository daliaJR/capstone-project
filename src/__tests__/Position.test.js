import { render, screen } from '@testing-library/react';
import Position from '../components/Position';

test('should render position component', async () => {
  render(<Position />);
  const positionComponent = await screen.getByTestId("position-section");
  expect(positionComponent).toBeInTheDocument();
});


// import { render, screen } from '@testing-library/react';
// import Position from '../components/Position';

// describe("Career Position", () => {
//     test('should render positions fetched from firestore', () => {
//         render(<Position />);
//         const positionDivElement = screen.getByTestId('position-section');
//         expect(positionDivElement).toBeInTheDocument();
//       });
// })

