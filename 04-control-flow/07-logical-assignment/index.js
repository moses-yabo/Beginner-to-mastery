// ||= assigns the right side value only if the left is a falsy value .
let a = 20;

if (!a) {
  a = 10;
}
a = a || 10;
a ||= 10;
console.log(a);

// &&= assigns the right side value only if the left is a truthy
let b = 10;
if (b) {
  b = 20;
}
b = b && 20;
b &&= 20;
console.log(b);

// ??= assigns the right side value only if the left is a truthy value
let c;
// if (c == null) {
//   c = 38;
// }
// c = c ?? 35;
c ??= 25;
console.log(c);
