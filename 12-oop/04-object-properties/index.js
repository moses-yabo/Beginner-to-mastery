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

console.log(rect2.perimeter());
delete rect2.perimeter;
