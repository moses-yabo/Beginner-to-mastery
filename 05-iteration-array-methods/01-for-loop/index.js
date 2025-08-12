//INITIAL EXPRESSION - Initialize a variable / counter
//CONDITIONAL EXPRESSION - Condition that loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - EXPRESSION THAT WILL BE EXECUTED AFTER EACH ITERATION OF THE LOOP . USUALLY INCREMENTS THE VARIABLE
//STATEMENT - CODE THAT WILL BE EXECUTED EACH TIME THE LOOP IS RUN . TO EXECUTE A `BLOCK` OF CODE . USE TH `{}` SYNTAX
console.log('Halo');
//FOR LOOP

// for (let i = 0; i <= 10; i++) {
//   if (i == 7) {
//     continue;
//   }
//   if (i == 8) {
//     break;
//   }
//   console.log(i);
// }
//Nested Loops

// for (let i = 0; i <= 10; i++) {
//   console.log('Number', i);

//   for (let j = 0; j <= 10; j++) {
//     console.log(`${i} * ${j}  = ${i * j}`);
//   }
// }

//Loop Through an Array
const names = ['Ana', 'Bells', 'Giana', 'gonzelez', 'Sicko Mode', 'Kant Get'];
for (let i = 0; i < names.length; i++) {
  if (names[i] === 'Bells') {
    console.log(' Yhoo kelonto ujola namagweja wena ' + names[i]);
  } else {
    console.log(names[i]);
  }
}
