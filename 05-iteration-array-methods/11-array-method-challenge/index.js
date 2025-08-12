//Challenge 1
const people = [
  {
    firstName: 'Lindile',
    lastName: 'Yabo',
    age: 28,
    phone: '+27 71 234 5678',
    email: 'lindile.yabo@example.com',
  },
  {
    firstName: 'Tshiamo',
    lastName: 'Mokoena',
    age: 32,
    phone: '+27 82 456 7890',
    email: 'tshiamo.mokoena@example.com',
  },
  {
    firstName: 'Naledi',
    lastName: 'Khumalo',
    age: 25,
    phone: '+27 61 345 6789',
    email: 'naledi.khumalo@example.com',
  },
  {
    firstName: 'Ayanda',
    lastName: 'Nxumalo',
    age: 30,
    phone: '+27 60 111 2233',
    email: 'ayanda.nxumalo@example.com',
  },
  {
    firstName: 'Sipho',
    lastName: 'Mahlangu',
    age: 29,
    phone: '+27 74 567 8910',
    email: 'sipho.mahlangu@example.com',
  },
  {
    firstName: 'Zanele',
    lastName: 'Mthembu',
    age: 27,
    phone: '+27 76 345 1122',
    email: 'zanele.mthembu@example.com',
  },
  {
    firstName: 'Thando',
    lastName: 'Nkosi',
    age: 22,
    phone: '+27 67 234 1111',
    email: 'thando.nkosi@example.com',
  },
  {
    firstName: 'Boitumelo',
    lastName: 'Ramaphosa',
    age: 20,
    phone: '+27 68 555 3322',
    email: 'boitumelo.ramaphosa@example.com',
  },
];

const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((el) => ({ name: el.firstName + ' ' + el.lastName, email: el.email }));
console.log(youngPeople);

//Challenge 2
const numbers = [2, -30, 50, 20, -12, -9, 7];
const positiveNumber = numbers
  .filter((num) => num > 0)
  .reduce((acc, curr) => acc + curr, 0);
console.log(positiveNumber);

//Challenge 3

const words = ['coder', 'programmer', 'developer'];
const capitalizeWords = words.map(
  (word) => word[0].toUpperCase() + '' + word.slice(1)
);
console.log(capitalizeWords);
