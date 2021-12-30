import { EqualPasswordValidator } from './equal-password.validator';

describe('EqualPasswordValidator', () => {
  it('should create an instance', () => {
    const directive = new EqualPasswordValidator();
    expect(directive).toBeTruthy();
  });
});
