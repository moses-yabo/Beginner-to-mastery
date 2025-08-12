let x;
const arr = [32, 34, 56, 67, 89, 27];
// arr.push(98);

// arr.pop();

// arr.unshift(98);

// arr.shift();

// arr.reverse();
x = arr.includes(56);
x = arr.indexOf(560);
x = arr.slice(1, 3);
// x = arr.splice(-1, 2);
x = arr.splice(1, 4).reverse().toString().charAt(0);
console.log(x);
