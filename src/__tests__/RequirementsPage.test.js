import { render, screen } from '@testing-library/react';
import RequirementsPage from '../pages/RequirementsPage';

test('should render Thank you page', () => {
  render(<RequirementsPage />);
  const requirementsPage = screen.getByTestId('requirements-page');
  expect(requirementsPage).toBeInTheDocument();
});
