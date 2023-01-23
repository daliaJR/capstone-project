import { act, fireEvent, render, screen } from '@testing-library/react';
import Booking from '../pages/Booking';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

describe('Booking', () => {
  test('should render the booking page', () => {
    render(<Booking />);
    const headerText = screen.getByText(
      "let's match you with the right therapist"
    );
    expect(headerText).toBeDefined();
  });

  test('When NEXT button is pressed, it should go to the next question', async () => {
    render(<Booking />);

    const btn = screen.getByText('NEXT');
    const option = screen.getByTestId('Individual counseling');
    fireEvent.click(option);
    await act(async () => {
      await fireEvent.click(btn);
    });
    const question = screen.getByText('What is your relationship status?');

    expect(question).toBeDefined();
  });

  test('When PREVIOUS button is pressed, it should go back to the previous question', async () => {
    render(<Booking />);

    const nextBtn = screen.getByText('NEXT');
    const option = screen.getByTestId('Individual counseling');
    fireEvent.click(option);
    await act(async () => {
      await fireEvent.click(nextBtn);
    });
    const backBtn = screen.getByText('PREVIOUS');
    await act(async () => {
      await fireEvent.click(backBtn);
    });
    const question = screen.getByText(
      'What type of counseling are you looking for?'
    );

    expect(question).toBeDefined();
  });
});
