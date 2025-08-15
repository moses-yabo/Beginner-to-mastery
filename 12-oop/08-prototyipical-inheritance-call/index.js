function Shape(name) {
  this.name = name;
}
Shape.prototype.logName = function () {
  console.log(`Shape name: ${this.name}`);
};

function Rectangle(name, height, width) {
  //Inherits From the Shape Object which initializes name and assigns it to naem
  Shape.call(this, name);
  this.width = width;
  this.height = height;
}
//Inherits Shape Prototypes
Rectangle.prototype = Object.create(Shape.prototype);
function Circle(name, radius) {
  Shape.call(this, name);
  this.radius = radius;
}

Rectangle.prototype.logName = function () {
  console.log(`Rect 😂: ${this.name}`);
};

//Inherits Shape Prototypes
Circle.prototype = Object.create(Shape.prototype);
//Set prototype constructors

Rectangle.prototype.constructor = Rectangle;
Circle.prototype.constructor = Circle;

const rect = new Rectangle('Rectangle 1', 20, 20);
const circle = new Circle('Circle 1', 5);
console.log(rect);
console.log(circle);
rect.logName();
circle.logName();
