let x;
let d = new Date();

x = d.toString();
x = d.getTime();
x = d.valueOf();
x = d.getFullYear();
x = d.getMonth() + 1;
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getMilliseconds();
x = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
x = Intl.DateTimeFormat('default', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
}).format(d);

console.log('DAY   DATE    YEAR');

x = d.toLocaleString('en-ZA', {
  year: 'numeric',
  weekday: 'long',
  month: 'long',
  day: 'numeric',
});
console.log(x);

console.log('DAY   DATE  ');

x = d.toLocaleString('en-ZA', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
});
// x = d.toISOString().slice(0, 10);
console.log(x);
console.log('Hour  Minutes Seconds');

x = d.toLocaleString('en-ZA', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});
console.log(x);

x = d.toLocaleString('en-ZA', {
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
});
console.log(x);
