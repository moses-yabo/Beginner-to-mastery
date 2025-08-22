import { getPost } from './utils.js';
import Person from './Person.js';
getPost();

const person = new Person('John', 30);
console.log(`Name: ${person.name}, Age: ${person.age}`);
