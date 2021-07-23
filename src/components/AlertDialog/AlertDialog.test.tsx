import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AlertDialog from './_AlertDialog';

describe('<AlertDialog />', () => {
  test('it should mount', () => {
    render(<AlertDialog />);
    
    const alertDialog = screen.getByTestId('AlertDialog');

    expect(alertDialog).toBeInTheDocument();
  });
});