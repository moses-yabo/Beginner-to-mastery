const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg',
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg',
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg',
  },
];

const mediaEl = document.querySelector('#imageDisplay').firstElementChild;
const headingName = mediaEl.parentElement.previousElementSibling;
const profileDiplay = document.querySelector('#profileDisplay');

const years = profileDiplay.firstElementChild;
const locationEl = years.nextElementSibling;
const lookingFor =
  profileDiplay.firstElementChild.nextElementSibling.nextElementSibling;
const nxtButton = document.querySelector('#next');
function* createPeopleIterator() {
  let index = 0;
  while (true) {
    yield data[index++ % data.length];
  }
}

const iterator = createPeopleIterator();
console.log(iterator.next());
nxtButton.addEventListener('click', () => {
  const value = iterator.next().value;
  console.log(headingName, mediaEl, years);
  console.log(headingName);

  headingName.textContent = value.name;
  mediaEl.setAttribute('src', value.image);
  years.textContent = `${value.age} Years old`;
  locationEl.textContent = value.location;
  lookingFor.textContent = `${value.gender.toUpperCase()} Looking For ${value.lookingfor.toUpperCase()}`;
});

const set = new Set();

set.add(10);
set.add(1);
set.add(11);
set.add(2);
set.add(2);
set.add(4);
set.add(6);
set.add(9);
set.add(0);

// set.forEach((el) => {
//   console.log('forEach in a set', el);
// });

// Array.from(set).forEach((el) => {
//   console.log('forEach from converted setter', el);
// });
// for (const element of set) {
//   console.log('via for of', element);
// }
const iterators = set.values();
// console.log(iterators.next());
// console.log(iterators.next());
// console.log(iterators.next());
// console.log(iterators.next());
// console.log(iterators.next());
// console.log(iterators.next());
// console.log(iterators.next());
// console.log(iterators.next());
// console.log(iterators.next());
const myMap = new Map();
myMap.set('name', 'Lindile');
myMap.set('surname', 'Yabo');
myMap.set('age', 30);
myMap.set('career', 'tech');
console.log('??', myMap.get('name'));
console.log('??', myMap.get('surname'));
console.log('??', myMap.get('age'));
console.log('??', myMap.get('career'));
