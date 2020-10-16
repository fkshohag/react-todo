import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Todo from './Todo';

describe('<Todo />', () => {
  test('it should mount', () => {
    render(<Todo />);
    
    const todo = screen.getByTestId('Todo');

    expect(todo).toBeInTheDocument();
  });
});