import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tracks from './_Tracks';

describe('<Tracks />', () => {
  test('it should mount', () => {
    render(<Tracks />);
    
    const tracks = screen.getByTestId('Tracks');

    expect(tracks).toBeInTheDocument();
  });
});