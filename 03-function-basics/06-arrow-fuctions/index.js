// function add(a, b) {
//   return a + b;
// }

//Arrow Function syntax
const add = (a, b) => a + b;
//Implicit Returns
const multiply = (a, b) => a + b;
//Can Leave off () with single param
const double = (a) => a * 2;
console.log(add(1, 3));
console.log(multiply(2, 4));

// When Returning an object in an arrow function Wrap the object with paranthesis because it may be interpreted in a wrong ways since the object and function closes with curly brases so it might not be interpreted as an object
const createObj = () => ({
  name: 'Brad',
});

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((el) => console.log(el));
