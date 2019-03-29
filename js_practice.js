// Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
function printNumbersDivisibleByThree() {
  var index = 1;
  while (index <= 1000) {
    if (index % 3 === 0) {
      console.log(index);
    }
    index += 1;
  }
}
// printNumbersDivisibleByThree();


// Write a method that accepts an array of strings and prints out every other string.
function printEveryOtherItem(strings) {
  var index = 0;
  strings.forEach(function(string) {
    if (index % 2 === 0) {
      console.log(string);
    }
    index += 1;
  });
}
// printEveryOtherItem(["a", "b", "c", "d", "e"]);


// Write a method that accepts an array of numbers and returns the sum.
function computeSum(numbers) {
  var sum = 0;
  numbers.forEach(function(number) {
    sum += number;
  });
  return sum;
}
// console.log(computeSum([2, 4, 5]));

// Start with the hash: city_populations = {chi: 2700000}
// Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
var cityPopulations = {chi: 2700000};
cityPopulations["nyc"] = 8400000;
cityPopulations.sf = 800000;  // same as cityPopulations["sf"]
// console.log(cityPopulations);



// Write a function that prints out every number from 1 to 100.

// make a function
// have the function print out a number

// WHILE LOOP
// function oneToOneHundred() {
//   var i = 0;
//   while (i < 100) {
//     i += 1;
//     console.log(i);
//   }
// }


// oneToOneHundred();


// FOR LOOP
function oneToOneHundredForLoop() {
  for (var i = 0; i < 100; i++) {
    console.log(i + 1);
  }
  // console.log(5);
}

// oneToOneHundredForLoop();

// make a loop
// print out 1-100





// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

function hundredOdds() {
  for (var i = 1; i < 100; i+=2) {
    // if (i % 2 === 1) {
    //   console.log(i);
    // }
    console.log(i);
  }
}

// hundredOdds();

// Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

function count55s(numbers) {
  var counter = 0;
  // # loop through each number
  numbers.forEach(function(number) {
    // # figure out if it's 55
    if (number === 55) {
      counter++;
    }
    // console.log(number);
  });
  // # if it is, increment a counter
  return counter;
}

// console.log(count55s([1,345,657,2,657,55,55,55,3234,67768]));

// Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
// For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

function awesomesauced(strings) {
  var newArray = [];
  strings.forEach(function(string) {
    newArray.push(string);
    newArray.push('awesomesauce');
    // console.log(string);
  });
  newArray.pop();
  return newArray;
}

console.log(awesomesauced(["a", "b", "c", "d", "e"]));

// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}


// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// The final result should be: {chair: 5, table: 2, desk: 7}


// Write a method that accepts a number and returns its factorial.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.


// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
