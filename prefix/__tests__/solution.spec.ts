import { countStringsWithPrefix } from '../_solution';

function countStrings (array: string[], prefix: string): number {
  let count = 0;
  array.forEach((str) => {
    if (str.startsWith(prefix)) {
      if (str.length === prefix.length) { return; }
      count++;
    }
  });
  return count;
}

describe('Count Prefix ', () => {
  it('should count prefix AB', () => {
    const array = ['a', 'ab', 'abc', 'abcd', 'abcde'];
    expect(countStringsWithPrefix(array, 'ab')).toBe(3);
  });

  it('should count prefix ABC', () => {
    const array = ['a', 'ab', 'abc', 'abcd', 'abcde'];
    expect(countStringsWithPrefix(array, 'abc')).toBe(2);
  });

  it('should count prefix ABCD', () => {
    const array = ['a', 'ab', 'abc', 'abcd', 'abcde'];
    expect(countStringsWithPrefix(array, 'abcd')).toBe(1);
  });

  it('should count prefix ADA', () => {
    const array = ['ada', 'adagfdf', 'dfsdfsf', 'adda', 'aada', 'adalovelace'];
    expect(countStringsWithPrefix(array, 'ada')).toBe(2);
  });

  it('should count prefix random prefix length 100', () => {
    const array = [];
    const abcd = 'abcdefghiojklmnopqrstuvwxyz';
    let prefixTest = '';
    const letterRandom = () => Math.floor(Math.random() * abcd.length);

    for (let i = 0; i < 5; i++) {
      prefixTest += abcd[letterRandom()];
    }

    for (let i = 0; i < 100; i++) {
      const str = prefixTest +
      abcd.charAt(letterRandom()).repeat(Math.floor(i % 3)) +
      abcd.charAt(letterRandom()).repeat(Math.floor(i % 3));

      array.push(str);
    }
    expect(countStringsWithPrefix(array, prefixTest)).toBe(countStrings(array, prefixTest));
  });
  it('should count prefix random prefix length 1000', () => {
    const array = [];
    const abcd = 'abcdefghiojklmnopqrstuvwxyz';
    let prefixTest = '';
    const letterRandom = () => Math.floor(Math.random() * abcd.length);

    for (let i = 0; i < 5; i++) {
      prefixTest += abcd[letterRandom()];
    }

    for (let i = 0; i < 1000; i++) {
      const str = Math.random() > 0.5
        ? prefixTest
        : '' +
      abcd.charAt(letterRandom()).repeat(Math.floor(i % 3)) +
      abcd.charAt(letterRandom()).repeat(Math.floor(i % 3));

      array.push(str);
    }
    expect(countStringsWithPrefix(array, prefixTest)).toBe(countStrings(array, prefixTest));
  });
});
