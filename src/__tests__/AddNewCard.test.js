import { render, screen } from '@testing-library/react';
import AddNewCard from '../pages/AddNewCard';

describe('should render Add New Card component', () => {
    test('should search for card placeholder element', () => {
        render(<AddNewCard />);
        const placeholder = screen.getByPlaceholderText("4287 8876 8699 3434");
        expect(placeholder).toBeInTheDocument();
      });
      
});

describe('should render Add New Card component', () => {
    test('should search for text in p element', () => {
        render(<AddNewCard />);
        const text = screen.getByText("CVV Code");
        expect(text).toBeInTheDocument();
      });
      
});
