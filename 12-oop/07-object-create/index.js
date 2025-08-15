const rectanglePrototypes = {
  area: function () {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2 * (this.width + this.height);
  },
  isSquared: function () {
    return this.width === this.height;
  },
};

function createRectangle(height, width) {
  return Object.create(rectanglePrototypes, {
    width: {
      value: width,
    },
    height: {
      value: height,
    },
  });
}

const rect = createRectangle(10, 20);
const rect2 = createRectangle(10, 10);

console.log(rect);
console.log(rect.area());
console.log(rect.perimeter());
console.log(rect.isSquared());
console.log(rect2.area());
console.log(rect2.perimeter());
console.log(rect2.isSquared());
