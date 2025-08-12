let x;
const person = {
  name: 'john hlophe',
  age: 54,
  isAdmin: true,
  address: {
    street: 'P17 salwe Cres',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'coding', 'rugby'],
};

x = person.name;
x = person['age'];
x = person['address']['street'];
x = person.hobbies[1];
delete person.age;
person.hasChildren = true;
person.greet = function () {
  console.log(`Hello my name is ${this.name}`);
};
x = person.greet();

const person2 = {
  'first name': 'Brad',
  'last name': 'Travesy',
};
x = person2['first name'];
console.log(x);
