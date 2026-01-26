const name = "saugat";
const repoCount = 50;

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("saugat-hc-comt");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
// console.log(gameName.capitalize); // undefined
console.log(gameName.charAt(2));
console.log(gameName[2]);
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4); //0 to 4 index samma but not including 4
console.log(newString);

const anotherString = gameName.slice(-1);
console.log(anotherString);

const newStringOne = "   saugat    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://saugat.com/saugat%20choudhary";

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));
