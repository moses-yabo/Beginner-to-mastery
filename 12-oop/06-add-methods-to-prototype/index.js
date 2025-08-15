function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}
Rectangle.prototype.area = function () {
  return `name is ${this.name}, area is ${this.width * this.height}`;
};
Rectangle.prototype.parameter = function () {
  return `name is ${this.name}, paremeter is ${2 * (this.width + this.height)}`;
};
Rectangle.prototype.isSquare = function () {
  return `name is ${this.name}, is Square ${this.width === this.height}`;
};
Rectangle.prototype.changeName = function (newName) {
  this.name = newName;
  return `new is ${this.name}`;
};
const rect1 = new Rectangle('rect1', 40, 40);
const rect2 = new Rectangle('rect2', 40, 40);
console.log(rect1);
console.log(rect1.area());
console.log(rect1.parameter());
console.log(rect1.isSquare());
console.log(rect1.changeName('Mnqini'));
console.log(rect1.name);
console.log(rect2.area());
