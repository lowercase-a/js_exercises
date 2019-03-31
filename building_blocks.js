// make a variable

// var fruits = ["pear", "apple", "cranberry"];

// make a loop

// fruits.forEach(function(fruit) {
//   console.log(fruit);
// });

// for (var i = 0; i < fruits.length; i++) {
//   console.log(i);
// }

// make a conditional statement

// if (fruits[0] === "pineapple") {
//   console.log('this will not print out');
// }


// make a function and run it

// function sayHi() {
//   console.log('hello');
// }

// sayHi();


// fizzBuzz

// given a number, print out that number
// unless it's divisible by 3, then print out 'fizz'
// unless it's divisible by 5, then print out 'buzz'
// unless it's divisible by 3 and 5, then print out 'fizz buzz'

function fizzBuzz(number) {

  if (number % 5 === 0 && number % 3 === 0) {
    console.log('fizzBuzz');
  } else if (number % 5 === 0) {
    console.log('buzz');
  } else if (number % 3 === 0) {
    console.log('fizz');
  } else {
    console.log(number);
  }
}

fizzBuzz(15);
