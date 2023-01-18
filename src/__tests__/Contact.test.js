import { fireEvent, render, screen } from '@testing-library/react';
import Contact from '../features/counter/Contact';

describe('Contact', () => {
  test('should render the header test', () => {
    render(<Contact />);
    const headerText = screen.getByText('SEND US YOUR REQUEST!');
    expect(headerText).toBeDefined();
  });

  test('should render the paragraph of the component', () => {
    render(<Contact />);
    const paragraphText = screen.getByTestId('paragraphText');
    expect(paragraphText).toBeDefined();
  });

  test('has the correct number of form fields', () => {
    const { getAllByRole } = render(<Contact />);
    const inputElement = getAllByRole('textbox');
    expect(inputElement.length).toEqual(3);
  });

  test('submit button works correctly', () => {
    render(<Contact />);
    const submitBtn = screen.getByText('SUBMIT');
    fireEvent.click(submitBtn);
    expect(submitBtn.disabled).toBe(false);
  });
});
