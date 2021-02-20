import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';


test('renders about page', () => {
  render(<About />);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
  // expect(linkElement).toBeCloseTo();
});
