import { render, screen } from '@testing-library/react';
import About from '../pages/About';

test('should render About component', () => {
  render(<About />);
  const aboutComponent = screen.getByTestId('about-page');
  expect(aboutComponent).toBeInTheDocument();
  expect(aboutComponent).toHaveTextContent('Healing');
});
