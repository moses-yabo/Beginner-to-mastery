const d = new Date(10, 30, 2022, 6, 0, 0);
const hour = d.getHours();
console.log(hour);
if (hour < 12) {
  console.log('Good Morning');
} else if (hour < 18) {
  console.log('Good After noon');
} else {
  console.log('Good Night');
}

//Nested If Statement
if (hour < 12) {
  console.log(' Good Morning');

  if (hour === 6) {
    console.log('Wake up!');
  }
} else if (hour < 18) {
  console.log('Good After noon');
} else {
  console.log('Good Night');
  if (hour >= 20) {
    console.log('zzzzz..');
  }
}

if (hour >= 7 && hour < 15) {
  console.log('it is work time !');
}
if (hour === 6 || hour === 20) {
  console.log('Brush your Teeths !');
}
