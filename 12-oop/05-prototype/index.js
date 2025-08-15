function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;

  this.area = function () {
    return `name is ${this.name}, area is ${this.width * this.height}`;
  };
}

const rect1 = new Rectangle('rect1', 40, 60);
console.log(Object.getPrototypeOf(rect1));
