const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

console.log(balance.toString().length); //length starts from 1 where as index starts from 0
console.log(balance.toFixed(4));

const otherNumber = 123.4966;

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
// console.log(Math.round(4.5));//ans will be 5 because .5 and above round up
console.log(Math.ceil(4.1)); // ans will be 5 because ceil means round up
console.log(Math.floor(4.9)); // ans will be 4 because floor means round down
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //random number between 0 to 1 but not including 1
console.log(Math.random() * 10); //+ 1 is done because we want number from 1 to 10 but not including 10
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);// random number between min and max including both
// 20-11=9*3+10