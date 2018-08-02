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

describe('type detections', () => {
  it('isString', () => {
    expect(LDash.isString('hello')).equal(true);
  });
  it('isNumber', () => {
    expect(LDash.isNumber(1)).equal(true);
  });
  it('isBoolean', () => {
    expect(LDash.isBoolean(true)).equal(true);
  });
  it('isNull', () => {
    expect(LDash.isNull(null)).equal(true);
  });
  it('isUndefined', () => {
    expect(LDash.isUndefined(undefined)).equal(true);
  });
  it('isFunction', () => {
    expect(LDash.isFunction(() => '')).equal(true);
  });
  it('isObject', () => {
    expect(LDash.isObject({})).equal(true);
  });
});

describe('new LDash(string).trim', () => {
  it('should trim a string', () => {
    expect((new LDash(' hello, world ')).trim()).equal('hello, world');
  });
});
