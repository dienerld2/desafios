import { bin2Dec } from '../solution';

describe('Bin2Dec', () => {
  it('should correct return when send "101"', () => {
    const input = '101';
    const result = bin2Dec(input);

    expect(result).toEqual(5);
  });

  it('should correct return when send "1001"', () => {
    const input = '1001';
    const result = bin2Dec(input);

    expect(result).toEqual(9);
  });

  it('should correct return when send "1000000"', () => {
    const input = '1000000';
    const result = bin2Dec(input);

    expect(result).toEqual(64);
  });

  it('should correct return when send "1000000000000"', () => {
    const input = '1000000000000';
    const result = bin2Dec(input);

    expect(result).toEqual(4096);
  });

  it('should correct return when send random string with 5 char ', () => {
    const seed = () => Math.round(Math.random());
    let input = '';
    for (let i = 0; i < 5; i++) {
      input += ['0', '1'][seed()];
    }

    const result = bin2Dec(input);

    expect(result).toEqual(parseInt(input, 2));
  });

  it('should correct return when send random string with 10 char ', () => {
    const seed = () => Math.round(Math.random());
    let input = '';
    for (let i = 0; i < 10; i++) {
      input += ['0', '1'][seed()];
    }

    const result = bin2Dec(input);

    expect(result).toEqual(parseInt(input, 2));
  });

  it('should correct return when send random string with 64 char ', () => {
    const seed = () => Math.round(Math.random());
    let input = '';
    for (let i = 0; i < 100; i++) {
      input += ['0', '1'][seed()];
    }

    const result = bin2Dec(input);
    expect(result).toEqual(parseInt(input, 2));
  });
});
