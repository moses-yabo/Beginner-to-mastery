const firstName = 'John';
const lastName = 'UnncoolMc';
const age = 30;
const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

//Destructuring

const todo = {
  id: 1,
  title: 'Take out the trash',
  user: {
    name: 'john',
  },
};

const {
  id: todoId,
  title,
  user: { name },
} = todo;

console.log(todoId, title, name);

const arr = [1, 2, 3, 4, 5, 6];
const [first, sec, third, ...rest] = arr;

console.log(first, sec, third, rest);
