import { render, screen } from '@testing-library/react';
import TherapistCreate from '../pages/TherapistCreate';

describe('should render Therapist Create component', () => {
    test('should search for the form elements', () => {
        render(<TherapistCreate />);
        const form = screen.getByRole('form');
        expect(form).toBeInTheDocument();
      });
      
});

describe('should render Therapist Create component', () => {
    test('should search for username input elements', () => {
        render(<TherapistCreate />);
        const input = screen.getByRole("textbox", {name: /username/i});
        expect(input).toBeInTheDocument();
      });
      
});

describe('should render Therapist Create component', () => {
    test('should search for label email elements', () => {
        render(<TherapistCreate />);
        const labelEmail = screen.getByLabelText("email");
        expect(labelEmail).toBeInTheDocument();
      });
      
});

describe('should render Therapist Create component', () => {
    test('should search for a crate button', () => {
        render(<TherapistCreate />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
      });
      
});