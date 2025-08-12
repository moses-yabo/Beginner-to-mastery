let x;
//Array Literal
const numbers = [1, 2, 4, 5, 6, 7, 8];
const mix = [1, 'hola', true, 5, 6, 7, 8];

//Array Constructors

const fruits = new Array(
  'Apple',
  'Grape',
  'banana',
  'grape fruit ',
  'orange',
  'chilli'
);
x = numbers[0];
x = numbers[0] + numbers[4];
x = `my favourite fruit is ${fruits[4]}`;
x = numbers.length;
fruits[0] = 'Guava';
fruits[fruits.length] = 'Nutches';
fruits[fruits.length] = 'Tolofiya';
x = fruits;

console.log(x);
