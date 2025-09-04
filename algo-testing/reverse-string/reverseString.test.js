const reverseString = require('./reverseString');

describe('Reverse', () => {
  it('should be a function', () => {
    expect(typeof reverseString).toEqual('function');
  });
  it('should return a string', () => {
    expect(typeof reverseString('malume')).toEqual('string');
  });
  it('should return a a reversed string', () => {
    expect(reverseString('malume')).toEqual('emulam');
    expect(reverseString('hello')).toEqual('olleh');
    expect(reverseString('bye')).toEqual('eyb');
  });
});
