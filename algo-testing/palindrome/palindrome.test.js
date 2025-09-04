const palindrome = require('./palindrome');

describe('Palindrome', () => {
  it('should be a function', () => {
    expect(typeof palindrome).toEqual('function');
  });
  it('should be a return a Boolean', () => {
    expect(typeof palindrome(' ')).toEqual('boolean');
  });
  it('should return true if its a palindrome', () => {
    expect(palindrome('wow')).toBeTruthy();
    expect(palindrome('rotator')).toBeTruthy();
    expect(palindrome('kayak')).toBeTruthy();
  });
  it('should return false if its not a palindrome', () => {
    expect(palindrome('lindile')).toBeFalsy();
    expect(palindrome('maseven')).toBeFalsy();
    expect(palindrome('stephen')).toBeFalsy();
  });
  it('should return false if includes spaces', () => {
    expect(palindrome('lindile')).toBeFalsy();
    expect(palindrome('maseven')).toBeFalsy();
    expect(palindrome('stephen')).toBeFalsy();
  });
});
