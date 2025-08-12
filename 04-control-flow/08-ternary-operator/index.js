const age = 19;
if (age >= 18) {
  console.log('You can vote !');
} else {
  console.log('You can not vote');
}

// Using a ternary opearator

age >= 18 ? console.log('You can vote !') : console.log('You cannot vote');

//Assigning a conditional value to a variable

const canVote =
  age >= 18 ? console.log('You can Vote !') : console.log("You can't Vote !");

//Multiple Statement

const auth = false;

// const redirect = auth
//   ? (alert('Welcome to the Dashboard'), '/dashboard')
//   : (alert('Access Denied'), '/login');

// console.log(redirect);
auth && console.log('Welcome to the dashboard');
