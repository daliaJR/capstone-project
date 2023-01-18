import { render, screen } from '@testing-library/react';
import TherapistProfile from '../therapist/TherapistProfile';

describe('Therapist profile', () => {
  test('should render the header of the profile', () => {
    render(<TherapistProfile />);
    const headerText = screen.getByText('therapist profile');
    expect(headerText).toBeDefined();
  });

  test('has the correct number of input, text type in the form', () => {
    const { container } = render(<TherapistProfile />);
    const textInput = container.querySelectorAll('input[type="text"]');
    expect(textInput.length).toEqual(1);
  });

  test('has the correct number of input, date type in the form', () => {
    const { container } = render(<TherapistProfile />);
    const dateInput = container.querySelectorAll('input[type="date"]');
    expect(dateInput.length).toEqual(1);
  });
  test('has the correct number of input, email type in the form', () => {
    const { container } = render(<TherapistProfile />);
    const emailInput = container.querySelectorAll('input[type="email"]');
    expect(emailInput.length).toEqual(1);
  });

  test('has the correct number of input, number type in the form', () => {
    const { container } = render(<TherapistProfile />);
    const numberINput = container.querySelectorAll('input[type="number"]');
    expect(numberINput.length).toEqual(1);
  });
});
