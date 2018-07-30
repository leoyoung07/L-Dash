import { expect } from 'chai';
import LDash from '../src';

describe('trimStr', () => {
  it('should trim a string', () => {
    expect(LDash.trimStr(' hello, world ')).equal('hello, world');
  });
});
