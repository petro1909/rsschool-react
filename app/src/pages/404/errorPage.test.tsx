import { describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ErrorPage from './errorPage';
import React from 'react';

describe('Error page', () => {
  it('Render error page', () => {
    const { container } = render(<ErrorPage />);
    const errorWrapperElementsLenght = container.getElementsByClassName('error-wrapper').length;
    expect(errorWrapperElementsLenght).toBe(1);
  });
});
