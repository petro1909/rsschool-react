import { describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import AboutPage from './aboutPage';
import React from 'react';

describe('About page', () => {
  it('Render about page', () => {
    const { container } = render(<AboutPage />);
    const aboutWrapperElementsLenght = container.getElementsByClassName('about-wrapper').length;
    expect(aboutWrapperElementsLenght).toBe(1);
  });
});
