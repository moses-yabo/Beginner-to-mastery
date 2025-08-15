//[[Configurable]] - if 'true the property can be deleted and these attributes can be modified , otherwise not
//[[Enumarable]] - if 'true the property will be returned in a `for ...in` loop , otherwise not
//[[Writable]] - if 'true value of the property can be changed,otherwise not
//[[value]] - value of the property
Math.PI = 8;
console.log(Math.PI);
let decriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

const rectOb = {
  name: 'Rect1',
  width: 20,
  height: 10,
};
Object.defineProperty(rectOb, 'name', {
  writable: false,
  configurable: false,
  enumerable: false,
});

decriptor = Object.getOwnPropertyDescriptor(rectOb, 'name');
console.log(decriptor);
rectOb.name = 'Moooo';

console.log(rectOb);
for (const [key, values] of Object.entries(rectOb)) {
  console.log(key, values);
}
console.log(Object.getOwnPropertyDescriptors(rectOb));
