// Falsy Values :
//0
// - False
// - null
// - undefined
// - NaN

//Truthy Values
// Everything else that is not falsy
// - true
// '0' (0 in a string )
// - true
// - ' ' (space in a string)
// - 'false' (false in a string)
// [] (empty array)
// {} (empty array)
// function (){} (empty function)

const x = function () {};
if (x) {
  console.log('this is truthy');
} else {
  console.log('This is falsy');
}

console.log(Boolean(x));

//Truthy and falsy caveats
const children = 0;
if (!isNaN(children)) {
  console.log(`You have ${children} Children`);
} else {
  console.log('Please enter number of children');
}

//Checking for Empty Array
const posts = ['ola'];
if (posts.length > 0) {
  console.log('List Post');
} else {
  console.log('No Post ');
}
//Checking for Empty Array
const post = { name: '' };
if (Object.keys(post).length > 0) {
  console.log('List OBJ');
} else {
  console.log('No OBJ listed ');
}

// Loose equality(==)
console.log('' === 0);
console.log(0 === false);
console.log(null === undefined);
