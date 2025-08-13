const strLit = 'Hello';
const strObj = new String('World');
console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

//Boxing
console.log(strLit.toUpperCase());
console.log(strLit[0]);

//UnBoxing
console.log(strObj.valueOf(), typeof strObj.valueOf());

console.log(strObj.constructor);
console.log(strLit.constructor);

console.log(strObj instanceof String);
console.log(strLit instanceof String);

//other types
const boolyLit = false;
const boolyObj = new Boolean(true);

console.log(boolyLit.constructor);
console.log(boolyObj.constructor);

console.log(boolyLit instanceof Boolean);
console.log(boolyObj instanceof Boolean);

const arrLit = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrObj = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(arrLit.constructor);
console.log(arrObj.constructor);

console.log(arrLit instanceof Array);
console.log(arrObj instanceof Array);
const numLit = 9;
const numObj = new Number(5);
console.log(numLit.constructor);
console.log(numObj.constructor);
console.log(numLit instanceof Number);
console.log(numObj instanceof Number);

const funcLit = function (x) {
  return x * x;
};
const funcObj = new Function('y', 'return y * y');
console.log(funcLit(3));

console.log(funcLit, typeof funcLit);
console.log(funcObj(6));
console.log(funcObj, typeof funcObj);

const objLit = {};
const objOb = new Object();

console.log(typeof objLit);
console.log(typeof objOb);
console.log(objLit.constructor);
console.log(objOb.constructor);
