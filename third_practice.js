// 1. Write a function that reverses a string. Don’t use the “reverse” method! (Note: you can use the .split(“”) method to convert a string into an array of characters).

function reverseString(string) {
  var characters = string;
  var reversedString = "";
  for (var i = characters.length - 1; i >= 0; i--) {
    // console.log(i);
    // console.log(characters[i]);
    reversedString += characters[i];
  }
  return reversedString;
}

// console.log(reverseString('hello'));


// 2. Write a function that accepts a string and returns the number of times that the letter “a” occurs in it.

function countOfAs(string) {
  var splitString = string.split("");

  // loop through string
  var counter = 0;

  splitString.forEach(function(character) {
    // check every character to see if it's an a
    if (character === 'a') {
      // if it is, increment counter
      counter++;
    }
    // console.log(character);
  });
  return counter;
}

// console.log(countOfAs("apaplea"));




// 3. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number to search for within the array. The function should do a linear search and return the index at which this value is found, or it should return nil if the value is not found. See if there’s a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the “index” method!

// loop through all the numbers
// return an index based on searchFor
// return nil if the number isn't i nthe array

function findIndex(numbers, searchFor) {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === searchFor) {
      return i;
    }
  }
  return null;
}

// console.log(findIndex([2,4,78,777], 79));

// 4. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a new number that is not yet in the array. The function should return a new array with the new number inserted in the proper place. Do not use the “sort” method!

// 5. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number that is contained within the array. The function should return the string “lower” if the value is found in the lower half of the array, and it should return “higher” if the value is found within the greater half of the array. Try to optimize this algorithm so that it takes a minimum number of steps!
