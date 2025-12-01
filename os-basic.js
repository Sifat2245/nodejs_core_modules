const os = require('os');

console.log('system info \n');
console.log('-'.repeat(50));

console.log('platform details: ');
console.log('Platform: ', os.platform());
console.log('architecture: ', os.arch());
console.log('os type', os.type());
console.log('os Release: ', os.release());
console.log('host name: ', os.hostname());
console.log('machine: ', os.machine());

console.log('-'.repeat(50));

const cpus = os.cpus()
console.log('CPU info:');

console.log('CPU model: ', cpus[0].model);
console.log('number of cores: ', cpus.length);
console.log('cpu speed: ', cpus[0].speed);

console.log('-'.repeat(50));

const totalMemory = os.totalmem();
const freeMemory = os.freemem();
console.log('Total Memory: ', (totalMemory / 1024 / 1024 / 1024).toFixed(2), "gb");
console.log('free Memory: ', (freeMemory / 1024 / 1024 / 1024).toFixed(2), "gb");

console.log('-'.repeat(50));

const upTime = os.uptime();

const days = Math. floor(upTime / 86400);
const hours = Math.floor((upTime%86400)/3600);
const minutes = Math.floor((upTime%3600)/60);

console.log(`${days} days, ${hours} Hours, ${minutes} Minutes`);