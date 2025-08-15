//SEALING - Prevents properties from being added or removed. Can still be Changed
//FREEZING - Prevents properties from being added , removed or changed
const rectOb = {
  name: 'Rect1',
  width: 20,
  height: 10,
};
Object.seal(rectOb);
let descriptors = Object.getOwnPropertyDescriptors(rectOb);

console.table(descriptors);
rectOb.color = 'red';
delete rectOb.height;
console.table(rectOb);
const circleObj = {
  name: 'Circle1',
  radius: 20,
};

Object.freeze(circleObj);

descriptors = Object.getOwnPropertyDescriptors(circleObj);
console.table(descriptors);
console.log('rect obj is sealed', Object.isSealed(rectOb));
console.log('rect obj is freezed', Object.isFrozen(rectOb));
console.log('circle obj is sealed', Object.isSealed(circleObj));
console.log('circle obj is freezed', Object.isFrozen(circleObj));
