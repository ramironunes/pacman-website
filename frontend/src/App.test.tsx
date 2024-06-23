/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-06-22 19:04:13
 * @Info:   A brief description of the file
 * ===========================================================================
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
