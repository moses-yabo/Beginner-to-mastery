class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this.capitalizeFirst(this._firstName);
  }

  set firstName(value) {
    this._firstName = this.capitalizeFirst(value);
  }
  get lastName() {
    return this.capitalizeFirst(this._lastName);
  }

  set lastName(value) {
    this._lastName = this.capitalizeFirst(value);
  }

  capitalizeFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const person1 = new Person('john', 'juda');
console.log(person1.firstName);
console.log(person1.lastName);
person1.firstName = 'jane';
person1.lastName = 'juda';
console.log(person1.fullName);
console.log(person1);

// const btn = document.querySelector('button').addEventListener('click', this);
// console.log(btn);

// class App {
//   constructor() {
//     this.serverName = 'localhost';
//     document
//       .querySelector('button')
//       .addEventListener('click', this.getServerName.bind(this));
//   }

//   getServerName() {
//     console.log(this);
//   }
// }

// const app = new App();
// app.serverName();

//1 this
//In javascript  this is determined by how a function is called , not where its defined
/// this can change depending on a call site
// function show() {
//   console.log('??', this.name);
// }
// const person = { name: 'Lindile', show };
// person.show();
// show();

//2 bind

//bind creates a new function with (this) permanently set to the value you provide -- it does not call the  function right away
/*Key Points
    - Returns a new function
    - this is locked in and cant be overriden
    - Useful for event handlers on classes or when passing callbacks
*/

// function greet() {
//   console.log(`Hi, Im ${this.name}`);
// }

// const person1 = { name: 'moses' };

// const greetPerson = greet.bind(person1);
// greetPerson();

/*3 call
call() invokes the function immediately , letting you set this  and pass arguments one by one
*/

// function introduce(age, city) {
//   console.log(`${this.name} is ${age} years old from ${city}`);
// }
// introduce.call(person, 25, 'Kaapstad');

/*
4 apply()
apply is the twin of call() . but it takes argument as an array 
*/

// introduce.apply(person, [29, 'kwanzolo']);

/*
Pro tip:
if you need to pass dynamic arguments from an array , use apply
if you want to lock (this) for later use,use bind.
if you need to call immediately  and and arguments are known use call() 
*/

// 1 Arrow Functions ignore bind,call and apply for (this)
// const person2 = {
//   name: 'Lindile',
//   normalFn: function () {
//     console.log('NormalFn this:', this.name);
//   },
//   arrowFn: () => {
//     console.log('arrowFn this:', this.name);
//   },
// };

// person2.normalFn();
// person2.arrowFn();

//Even if you try to bind or call an arrow function
//BInd has no effect here
// const arrow = () => console.log(this);
// const boundArrow = arrow.bind({ name: 'Bound Object' });
// boundArrow();

// 2 why

/*
 when you write 
()=>{}

javascript doesnt create a (this) for it. instead , it looks up to where the function was defined.
*/
/*
3 Where arrow functions are great  They shine  when you need to preserve this from outer scope --like in callbacks

*/

// function Timer() {
//   this.seconds = 0;
//   setInterval(() => {
//     this.seconds++;
//     console.log(this.seconds);
//   }, 1000);
// }

/*
4 Mixing bind/call/apply with arrow function

bind -> ignored for this in arrow functions , but still works for arguments
call and apply -> also ignored for this , but will still pass arguments 
example:
*/
// const arrow1 = (...args) => console.log(this, args);
// arrow1.call({ a: 1 }, 'x', 'y');
//this is still outer scope , but args = ["x","y"]
