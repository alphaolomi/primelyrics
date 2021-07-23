import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Spinner from './Spinner';

describe('<Spinner />', () => {
  test('it should mount', () => {
    render(<Spinner />);
    
    const spinner = screen.getByTestId('Spinner');

    expect(spinner).toBeInTheDocument();
  });
});