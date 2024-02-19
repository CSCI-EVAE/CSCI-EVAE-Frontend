import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App Component', () => {
  test('renders header', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

});
