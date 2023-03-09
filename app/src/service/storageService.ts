export function getValueByKeyFromLocalStorage(key: string): string {
  const value = localStorage.getItem(key);
  if (!value) {
    return '';
  }
  return value;
}

export function setValueByKeyToLocalStorage(key: string, value: string): void {
  console.log(key);
  console.log(value);
  localStorage.setItem(key, value);
}
