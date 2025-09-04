const os = require('os');

//arch
console.log(os.arch());
//platform
console.log(os.platform());
if (os.platform() === 'win32') {
  console.log('you are on windows pcs');
} else if (os.platform() === 'darwin') {
  console.log('you are on a mac');
} else {
  console.log('you are on whatever');
}

// console.log(os.cpus());

//freemem
console.log(
  `Free memmory ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`
);
//totalmem
console.log(
  `Total memmory ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`
);

//homedir
console.log(os.homedir());

//uptime
console.log(os.uptime());
const uptime = os.uptime();
const days = Math.floor(uptime / 60 / 60 / 24);
const hours = Math.floor(uptime / 60 / 60) % 24;
const minutes = Math.floor(uptime / 60) % 60;
const seconds = Math.floor(uptime) % 60;
console.log(
  `Minutes ${days} days:- ${hours} hours:- ${minutes} minutes:-${seconds} seconds:-`
);

//hostname
console.log(os.hostname());
