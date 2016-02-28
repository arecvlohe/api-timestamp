import expect from 'expect';
import parseTime from '../src/parsers/parseTime.js';
import parseUnix from '../src/parsers/parseUnix.js';

const obj1 = {
  query: { iso: '2016-02-28T20:13:30.492Z' },
};

const obj2 = {
  query: { iso: '' },
};

describe('parseTime', () => {
  it('should return parsed time', () => {
    const expected = { hour:15, minute:13, second:30 };
    expect(parseTime(obj1)).toEqual(expected);
  });
  it('should return invalid', () => {
    const expected = 'Invalid ISO-format';
    expect(parseTime(obj2)).toEqual(expected);
  });
});

describe('unixTime', () => {
  it('should return unix time', () => {
    const expected = { unix:1456690410492 };
    expect(parseUnix(obj1)).toEqual(expected);
  });
  it('should return invalid', () => {
    const expected = 'Invalid ISO-format';
    expect(parseUnix(obj2)).toEqual(expected);
  });
});
