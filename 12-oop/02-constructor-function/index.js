function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;

  this.area = function () {
    return `name is ${this.name}, area is ${this.width * this.height}`;
  };
}

const rect1 = new Rectangle('rect1', 40, 60);
const rect2 = new Rectangle('rect2', 10, 30);
const rect3 = new Rectangle('rect1', 20, 5);

console.log(rect1.area(), rect2.area(), rect3.area());
console.log(rect1.constructor);
console.log(rect2 instanceof Rectangle);
