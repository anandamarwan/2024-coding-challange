// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

// function reverseArray(n) {
//   if (n <= 0) {
//     throw new Error("n must be greater than 0");
//   }
//   let result = [];
//   for (let i = n; i > 0; i--) {
//     result.push(i);
//   }
//   return result;
// }

// // Example usage:
// let n = 5;
// let result = reverseArray(n);
// console.log(result); // Output: [5, 4, 3, 2, 1]

// const reverseSeq = (n) => {
//   const result = [];
//   for (let index = n; index >= 1; index--) {
//     result.push(index);
//   }
//   return result;
// };

const reverseSeq = (n) => [...Array(n)].map((el, i) => i + 1).reverse();

console.log(reverseSeq(5));
