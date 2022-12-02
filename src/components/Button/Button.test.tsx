import Button from './Button';
import { screen, render, fireEvent } from '@testing-library/react';

describe('button', () => {
  it('renders', () => {
    const { debug, getByRole } = render(<Button />);

    const button = getByRole('button');

    expect(button).toBeInTheDocument();
    debug();
  });

  it('changes text value when clicked', () => {
    render(<Button />);
    const button = screen.getByRole('button');

    expect(button.textContent).toMatch(/test button/i);

    fireEvent.click(button);

    expect(button.textContent).toMatch(/new text/i);
  });
});
