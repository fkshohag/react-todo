import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppHome from './AppHome';

describe('<AppHome />', () => {
  test('it should mount', () => {
    render(<AppHome />);
    
    const appHome = screen.getByTestId('AppHome');

    expect(appHome).toBeInTheDocument();
  });
});