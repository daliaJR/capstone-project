import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../pages/Contact';
import { BrowserRouter } from 'react-router-dom';

describe('Contact', () => {
  test('should render the header test', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    const headerText = screen.getByText('SEND US YOUR REQUEST!');
    expect(headerText).toBeDefined();
  });

  test('should render the paragraph of the component', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    const paragraphText = screen.getByTestId('paragraphText');
    expect(paragraphText).toBeDefined();
  });

  // test('has the correct number of form fields', () => {
  //   const { container } = render(<Contact />);
  //   const inputElements = container.querySelectorAll('input[type="text"]');
  //   expect(inputElements.length).toEqual(1);
  // });

  // test('submit button works correctly', () => {
  //   render(<Contact />);
  //   const submitBtn = screen.getByText('SUBMIT');
  //   fireEvent.click(submitBtn);
  //   expect(submitBtn.disabled).toBe(false);
  // });
});
