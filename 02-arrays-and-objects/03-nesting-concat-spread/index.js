let x;
const fruits = ['Apple', 'Grape', 'banana', 'grape fruit ', 'orange', 'chilli'];
const berries = [
  'strawberry',
  'Grape',
  'banana',
  'grape fruit ',
  'orange',
  'chilli',
];
// fruits.push(berries);

// x = fruits[6][2];

const allFruits = [fruits, berries];
x = fruits.concat(berries);

// Spread operator (...)
x = [...berries, ...fruits];
//Flatten Arrays

const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();
//Static  Methods on Array Object
x = Array.isArray(arr);
x = Array.from('12345');
const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c);
