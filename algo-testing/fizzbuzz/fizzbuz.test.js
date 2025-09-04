const fizzBuzz = require('./fizzbuz');
describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzBuzz).toEqual('function');
  });
  it('should return the number if not disivible by 3 or 5', () => {
    expect(fizzBuzz(1)).toEqual(1);
    expect(fizzBuzz(13)).toEqual(13);
    expect(fizzBuzz(19)).toEqual(19);
  });
  it('should return the fizz if its divisible by 3', () => {
    expect(fizzBuzz(3)).toEqual('Fizz');
    expect(fizzBuzz(6)).toEqual('Fizz');
    expect(fizzBuzz(12)).toEqual('Fizz');
  });
  it('should return the Buzz if its divisible by 5', () => {
    expect(fizzBuzz(5)).toEqual('Buzz');
    expect(fizzBuzz(10)).toEqual('Buzz');
    expect(fizzBuzz(20)).toEqual('Buzz');
  });
  it('should return the Fizz Buzz if its divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toEqual('Fizz Buzz');
    expect(fizzBuzz(30)).toEqual('Fizz Buzz');
    expect(fizzBuzz(45)).toEqual('Fizz Buzz');
  });
});
