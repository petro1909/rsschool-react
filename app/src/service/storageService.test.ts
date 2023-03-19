import { describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { getValueByKeyFromLocalStorage, setValueByKeyToLocalStorage } from './storageService';

describe('Storage service tests', () => {
  beforeEach(() => localStorage.clear());

  it('insert value in localStorage by key', () => {
    const key = 'testKey';
    const value = 'testValue';

    setValueByKeyToLocalStorage(key, value);

    const storageValue = localStorage.getItem(key);
    expect(storageValue).toEqual(value);
  });

  it('return value from localStorage by key, if key exist', () => {
    const key = 'testKey';
    const value = 'testValue';
    localStorage.setItem(key, value);

    const returnedValue = getValueByKeyFromLocalStorage(key);
    expect(value).toEqual(returnedValue);
  });

  it('return empty string from localStorage by key, if key do not exist', () => {
    const key = 'testKey';
    const value = 'testValue';
    localStorage.setItem(key, value);

    const returnedValue = getValueByKeyFromLocalStorage('not existed key');
    expect('').toEqual(returnedValue);
  });
});
