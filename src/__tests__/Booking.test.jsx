import { fireEvent, render, screen } from '@testing-library/react';
import Booking from '../components/booking/Booking';
import { useNavigate } from 'react-router-dom';
import { userEvent } from '@testing-library/user-event';

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

  test('When NEXT button is pressed, it should go to the next question', () => {
    render(<Booking />);

    const btn = screen.getByText('NEXT');
    fireEvent.click(btn);
    const question = screen.getByText('What is your relationship status?');
    expect(question).toBeDefined();
  });

  // test('changes to the next question when the next button is clicked', () => {
  //   const { getByText, getByTestId } = render(<Booking />);
  //   const nextButton = getByText('Next');
  //   const currentQuestion = getByTestId('current-question');
  //   expect(currentQuestion.textContent).toEqual('Question 1');

  //   fireEvent.click(nextButton);

  //   const updatedQuestion = getByTestId('current-question');
  //   expect(updatedQuestion.textContent).toEqual('Question 2');
  // });
});
