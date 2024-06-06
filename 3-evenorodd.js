// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

// function evenOrOdd(number) {
//     return number % 2 === 0 ? 'Even' : 'Odd'
//   }

function evenOrOdd(number) {
  if (number % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(evenOrOdd(50));
