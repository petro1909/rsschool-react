import { describe, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import MainPage from './mainPage';
import React from 'react';

global.fetch = vi.fn();

describe('Main page', () => {
  it('Render mian page', () => {
    const { container } = render(<MainPage />);
    const mainElementLenght = container.getElementsByClassName('main').length;
    expect(mainElementLenght).toBe(1);
  });
});
