import { describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SearchBar from './searchBar';
import React from 'react';

describe('SearchBar', () => {
  it('Render input', () => {
    render(<SearchBar />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
