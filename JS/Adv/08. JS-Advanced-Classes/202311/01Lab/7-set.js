// Set stores unique values only
let numbers = new Set();

numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(1);

console.log(Array.from(numbers));