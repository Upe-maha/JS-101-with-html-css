const obj = [10, 20, 30, 40, 50];
//           0  1   2   3   4
for (const num of obj) {
  console.log(num);
}

for (const num in obj) {
  console.log(num);
}

const object = {
  name: "Alice",
  age: 25,
  city: "New York",
};
for (const key in object) {
  console.log(key + ": " + object[key]);
}
