let i = 1;
//DO WHILE
while (i <= 100) {
  console.log(i);

  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }

  i++;
}
//FOR LOOP

// for (let index = 1; index <= 100; index++) {
//   if (index % 15 === 0) {
//     console.log('FizzBuzz');
//   } else if (index % 3 === 0) {
//     console.log('Fizz');
//   } else if (index % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(index);
//   }
// }
