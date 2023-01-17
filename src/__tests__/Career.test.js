import { render, screen, waitFor } from '@testing-library/react';
import Career from '../pages/Career';

test("should fetch and display asynchronous posts", async () => {
    render(<Career />);
    // screen.debug(); // text initially not present
    await waitFor(() => expect(screen.getByTestId("div-wrapper")).toBeInTheDocument());
    // screen.debug(); // text is present
  });