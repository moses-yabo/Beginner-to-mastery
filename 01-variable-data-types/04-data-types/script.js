//Primitive Types vs Refference Types

//1 Primitive Types

// String  -  Sequence of characters . Must be in quotes or backticks
const firstName = 'sara';
const ouput = firstName;
console.log(ouput, typeof ouput);
// Number  - Integers as well as floating- point numbers
const age = 30;
const outgate = age;
console.log(outgate, typeof outgate);
// Boolean  - Logical entity / true or false
const yiyoNa = true;
const outile = yiyoNa;
console.log(outile, typeof outile);
// Null  - intenional absence of any object value
const aptNumber = null;
const isNull = aptNumber;
console.log(isNull, typeof isNull);
// undefined - A Variable that has not yet been defined / Assigned
let ikangaka;
const areyouther = ikangaka;
console.log(areyouther, typeof areyouther);
//Symbol     - Numbers that are greater than the Number type can handle
const id = Symbol('id');
console.log(id, typeof id);
//BigInt - Numbers that are greater than the 'Number ' type can handle
const n = 665649395300n;
console.log(n, typeof n);
//2 Reference Types
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr, typeof arr);

const objecter = {
  name: 'brasley',
};

console.log(objecter, typeof objecter);

function bolekeni() {
  console.log('one 10000');
}

console.log(bolekeni, typeof bolekeni);
/*
Reference types or objects are a non primitive value amd when assigned to a variable , 
the variable is given a reference to that value.
Object literals, arrays and functions are all reference types
*/

// Static Typing vs Dynamic Types
/*
Javascript is a
*/

// Type Conversion and Type Coersion

// String to Number

let amount = '100';
console.log('String to Number');
// way 1
console.log(amount, typeof amount);
amount = parseInt(amount);

console.log(amount, typeof amount);
// way 2
amount = '120';
console.log(amount, typeof amount);
amount = +amount;
console.log(amount, typeof amount);

// way 3
amount = '180';
console.log(amount, typeof amount);
amount = Number(amount, typeof amount);
console.log(amount, typeof amount);

// Number to a String
console.log('Number to String');
// way 1
console.log(amount, typeof amount);
amount = amount.toString();
console.log(amount, typeof amount);

// way 2
amount = Number(amount);
console.log(amount, typeof amount);
amount = String(amount);
console.log(amount, typeof amount);

console.log('Converting Floats');

amount = '99.9';
console.log(amount, typeof amount);
amount = parseFloat(amount);
console.log(amount, typeof amount);

// Number to a Boolean

amount = 0;
console.log(amount, typeof amount);
amount = Boolean(amount);
console.log(amount, typeof amount);

console.log('Exploring NAN');

console.log(Math.sqrt(-8));

console.log(1 + NaN);

console.log(undefined + undefined);

console.log('foo' / 9);
