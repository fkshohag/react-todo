import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Task from './Task';

describe('<Task />', () => {
  test('it should mount', () => {
    render(<Task />);
    
    const task = screen.getByTestId('Task');

    expect(task).toBeInTheDocument();
  });
});