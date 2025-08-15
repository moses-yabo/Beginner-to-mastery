function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;

  this.area = function () {
    return `name is ${this.name}, area is ${this.width * this.height}`;
  };
}

const rect1 = new Rectangle('rect1', 40, 60);
const rect2 = new Rectangle('rect2', 40, 60);
console.log(rect1.name, rect2.width);
console.log(rect1['name'], rect2['width']);
// Add property
rect1.color = 'pink';

console.log(rect1.color);
rect2.perimeter = () => 2 * (rect2.height + rect2.height);

//Delete property
delete rect2.perimeter;
// Check for property

console.log(rect1.hasOwnProperty('color'));
console.log(rect2.hasOwnProperty('color'));

//Get Keys

console.log(Object.keys(rect1));

//Get Values
console.log(Object.values(rect2));

//Get entries
console.log(Object.entries(rect2));
// Loop Object entries
for (let [key, values] of Object.entries(rect1)) {
  if (typeof values !== 'function') {
    console.log(`${values}`);
  }
}
