const d = new Date(2022, 12, 10, 15, 0, 0);
const month = d.getMonth();
const hour = d.getHours();
switch (month) {
  case 1:
    console.log('it is January');
    break;
  case 2:
    console.log('it is February');
    break;
  case 3:
    console.log('it is February');
    break;
  default:
    console.log('it is not Jan , Feb or March');
}

switch (true) {
  case hour < 12:
    console.log(`Good Morning`);
    break;
  case hour < 18:
    console.log(`Good Afternoon`);
    break;
  default:
    console.log('Good Night');
}
