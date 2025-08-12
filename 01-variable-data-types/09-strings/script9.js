let x;
const name = 'john';
const age = 70;
x = ' Hello, my name is ' + name + ' and  I am ' + age + 'old';
x = ` Hello my name is ${name} and i am ${age} old`;
console.log(x);

//String Properties and Methods

const s = new String('Hello world');
x = s[1];
x = s.__proto__;
x = s.toUpperCase();
x = s.charAt(0);
x = s.indexOf('d');
x = s.substring(0, 4);
x = s.substring(7);
x = s.slice(-11, -6);
x = '    Hello World  ';
x = s.trim();
x = s.replace('world', 'Mzondi');
x = s.includes('Helliy');
x = s.valueOf();
x = s.split('');
console.log(x);
