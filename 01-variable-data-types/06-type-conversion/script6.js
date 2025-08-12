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
