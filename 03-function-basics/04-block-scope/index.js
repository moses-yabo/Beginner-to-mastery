const x = 100;
if (true) {
  const a = 13;
  let b = 600;
  var c = 700;
}

console.log(c);
for (var i = 0; i <= 10; i++) {
  console.log(i, 'in a loop lock');
}
console.log(i, 'globaly ');

function run() {
  var d = 100;
  console.log(d, 'in a function scope');
}

console.log(d, 'globaly Scoped');
