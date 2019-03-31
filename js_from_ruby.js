// Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is [“a”, “b”, “c”, “d”, “e”, “f”], the output should be [“a”, “c”, “e”].

// loop through the array
// some sort of if statement within the array
// make a new array based on the if statement

// function everyOther(strings) {
//   var evenIndexes = [];

//   for (var i = 0; i < strings.length; i++) {
//     // console.log(i);
//     if (i % 2 === 0) {
//       // console.log(strings[i]);
//       evenIndexes.push(strings[i]);
//     }
//     // console.log(strings[i]);
//   }

//   console.log(evenIndexes);
// }

// everyOther(["a", "b", "c", "d", "e", "f"]);



// Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// function factorial(number) {
//   // for (var i = 1; i < 6; i++) {
//   // for (var i = 0; i < 5; i++) {
//   //   console.log(i + 1);
//   var total = 1;
//   for (var i = number; i > 0; i--) {
//     total *= i;
//     // console.log(i);
//   }

//   console.log(total);
// }

// factorial(3);


// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].


// function arrayCombinations(numbers1, numbers2) {
//   var combinations = [];
//   numbers1.forEach(function(number1) {
//     numbers2.forEach(function(number2) {
//       // console.log(number1); // 1, 5, 10
//       // console.log(number2); // 100 , 500, 1000
//       // console.log(number1 + number2);
//       combinations.push(number1 + number2);
//     });
//   });
//   console.log(combinations);
// }

// arrayCombinations([1,5,10], [100,500,1000]);


// var numbers = [123,5,23,5];
// var lookFor = 23;

// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] == lookFor) {
//     console.log(i);
//   }
// }

// numbers.forEach(function(number) {
//   if (number == lookFor) {

//   }
// })


// var add = 12
// var numbers = [5,6,8,23,55];
// var newArray = [];
// var added = false;
// numbers.forEach(function(number) {
//   if (number > add && added == false) {
//     newArray.push(add);
//     added = true;
//   }
//   newArray.push(number);
// });


// console.log(newArray);

function higherOrLower(array, number) {
  var middle = Math.floor(array.length / 2);
  if (array[middle] > number) {
    return 'lower';
  } else {
    return 'higher';
  }
}


console.log(higherOrLower([2, 7, 14, 16, 24], 7) === "lower");

console.log(higherOrLower([2, 5, 7, 14, 16, 24], 7) == "lower")
console.log(higherOrLower([2, 7, 14, 16, 24], 16) == "higher")
console.log(higherOrLower([2, 5, 7, 14, 16, 24], 16) == "higher")
// console.log(higherOrLower([2, 5, 7, 14, 16, 24], 12) == nil)
