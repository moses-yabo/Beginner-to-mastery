let x;
const todo = new Object();
todo.id = '9433';
todo.name = 'Lil wayne';
todo.dateOfBirth = '1982';
todo.albums = ['the Carter 6 ', 'the Carter 5 ', 'the Carter 4'];
todo.isMarried = false;
x = todo;

const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71559,
    },
  },
};

x = person.address.coords.lat;
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 1, d: 2 };
const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);
const todos = [
  {
    id: 1,
    name: 'Buy milk',
  },
  {
    id: 2,
    name: 'Eat Pap',
  },
  {
    id: 3,
    name: 'Sleep',
  },
];
x = todos[0].name;

x = Object.keys(todo).length;

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty('date');
console.log(x);
