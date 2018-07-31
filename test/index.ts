import { expect } from 'chai';
import LDash from '../src';

describe('trimStr', () => {
  it('should trim a string', () => {
    expect(LDash.trimStr(' hello, world ')).equal('hello, world');
  });
});

describe('typeOf', () => {
  it('should return the type of param', () => {
    expect(LDash.typeOf('hello')).equal('[object String]');
  });
});

describe('isString', () => {
  it('should return is string or not', () => {
    expect(LDash.isString('hello')).equal(true);
  });
});

describe('new LDash(string).trim', () => {
  it('should trim a string', () => {
    expect((new LDash(' hello, world ')).trim()).equal('hello, world');
  });
});
