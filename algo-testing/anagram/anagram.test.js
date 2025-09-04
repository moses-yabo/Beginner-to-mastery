const anagram = require('./anagram');
describe('Anagram', () => {
  it('should be a function ', () => {
    expect(typeof anagram).toEqual('function');
  });
  it('should return a Boolean ', () => {
    expect(typeof anagram('arm', 'ram')).toEqual('boolean');
  });
  it('should return a true if anagram ', () => {
    expect(anagram('arm', 'ram')).toBeTruthy();
    expect(anagram('cinema', 'iceman')).toBeTruthy();
    expect(anagram('dog', 'god')).toBeTruthy();
  });
  it('should return a false if  not anagram ', () => {
    expect(anagram('hello', 'fellow')).toBeFalsy();
    expect(anagram('world', 'twirl')).toBeFalsy();
    expect(anagram('lost', 'cost')).toBeFalsy();
  });
});
