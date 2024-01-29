// Write your tests here

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AppClass from './AppClass'; // Import the component you want to test

describe('AppClass Component', () => {
  it('renders headings, buttons, and links correctly', () => {
    render(<AppClass />);
    
    // Test that the heading with the ID 'coordinates' is visible
    expect(screen.getByText('Coordinates')).toBeInTheDocument();

    // Test that the heading with the ID 'steps' is visible
    expect(screen.getByText('You moved')).toBeInTheDocument();

    // Test that the button with the ID 'left' is visible
    expect(screen.getByText('LEFT')).toBeInTheDocument();

    // Test that the button with the ID 'up' is visible
    expect(screen.getByText('UP')).toBeInTheDocument();

    // Test that the button with the ID 'right' is visible
    expect(screen.getByText('RIGHT')).toBeInTheDocument();

    // Test that the button with the ID 'down' is visible
    expect(screen.getByText('DOWN')).toBeInTheDocument();

    // Test that the button with the ID 'reset' is visible
    expect(screen.getByText('reset')).toBeInTheDocument();

    // Test that the input with the ID 'email' is visible
    expect(screen.getByPlaceholderText('type email')).toBeInTheDocument();

    // Test that the submit button is visible
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('updates the input value when typing', () => {
    render(<AppClass />);
    const input = screen.getByPlaceholderText('type email');
    
    // Type some text into the input
    fireEvent.change(input, { target: { value: 'example@email.com' } });

    // Verify that the input value has changed
    expect(input.value).toBe('example@email.com');
  });

});

test('sanity', () => {
  expect(true).toBe(false)
})
