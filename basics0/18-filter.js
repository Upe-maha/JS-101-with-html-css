//filter
const books = [
  { title: "Book A", author: "Author 1", rating: 4.5 },
  { title: "Book B", author: "Author 2", rating: 3.8 },
  { title: "Book C", author: "Author 3", rating: 4.2 },
  { title: "Book D", author: "Author 4", rating: 2.9 },
  { title: "Book E", author: "Author 5", rating: 4.7 },
  { title: "Book F", author: "Author 6", rating: 3.5 },
  { title: "Book G", author: "Author 7", rating: 4.0 },
];
const highRatedBooks = books.filter(function (book) {
  return book["rating"] >= 4.0;
});
const sort = books.sort();
console.log(sort);

console.log(highRatedBooks);

const arr = [10, 3, 5, 7, 9, 2, 34, 56, 78, 90];
const acc = arr.sort((a, b) => b - a);
console.log(acc);
const arr2 = ["mango", "banana", "grape", "apple", "plum", "orange"];
const acc2 = arr2.sort().reverse();
const arr3 = ["mango", "banana", "grape", "apple", "plum", "orange"];

const reverse = arr3.sort();

console.log(acc2);
console.log(reverse);
console.log(arr2);
