const items = ['avril', 'sira', 'an', 'phelow'];
const users = [
  { name: items[0] },
  { name: items[1] },
  { name: items[2] },
  { name: items[3] },
];
// for (const item of items) {
//   console.log(item);
// }
for (const user of users) {
  console.log(user.name);
}

//Loop Over Strings

const str = 'Hello World';
for (const letter of str) {
  console.log(letter);
}

//Loop over Maps

const map = new Map();
map.set('name', 'andiswa');
map.set('age', '23');
for (const [key, value] of map) {
  console.log(key, ':', value);
}
