import { describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Card from './card';
import React from 'react';
import { Product } from '../../types/product';

const testProduct: Product = {
  id: 1,
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: '...',
  images: ['...', '...', '...'],
};

describe('Card component', () => {
  it('Render card component', () => {
    render(<Card item={testProduct} />);
    const titleElemnet = screen.getByText(`${testProduct.title}`);
    expect(titleElemnet).toBeTruthy();
  });
});
