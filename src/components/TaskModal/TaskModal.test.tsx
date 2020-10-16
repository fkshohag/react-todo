import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TaskModal from './TaskModal';

describe('<TaskModal />', () => {
  test('it should mount', () => {
    render(<TaskModal />);
    
    const taskModal = screen.getByTestId('TaskModal');

    expect(taskModal).toBeInTheDocument();
  });
});