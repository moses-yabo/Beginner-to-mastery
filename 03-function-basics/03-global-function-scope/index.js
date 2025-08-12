const x = 100;
console.log(x, 'in global ');

function run() {
  console.log(window.innerWidth);
  console.log(x, 'in function');
}
if (true) {
  console.log(x, 'in Block');
}
run();
function add() {
  const x = 2;
  const y = 300;
  console.log(x + y);
}
add();
