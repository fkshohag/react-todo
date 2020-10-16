import React from 'react';
import { render, screen } from '@testing-library/react';
import '../AppHome/node_modules/@testing-library/jest-dom/extend-expect';
import TopBar from './TopBar';

describe('<TopBar />', () => {
  test('it should mount', () => {
    render(<TopBar />);
    
    const topBar = screen.getByTestId('TopBar');

    expect(topBar).toBeInTheDocument();
  });
});