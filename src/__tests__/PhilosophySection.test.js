import { render, screen} from '@testing-library/react';
import PhilosophySection from '../components/PhilosophySection';

test("should render PhilosophySection component in career page",  () => {
    render(<PhilosophySection />);
    expect(screen.getByTestId("div-wrapper")).toBeInTheDocument();
  });

