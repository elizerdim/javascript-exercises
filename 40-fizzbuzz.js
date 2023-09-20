// Write a program that takes a user’s input and prints the numbers from one to the number the user entered. 

// However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. 

// For numbers which are multiples of both three and five print FizzBuzz.

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    let result = "";
    if (i % 3 === 0) result += "Fizz";
    if (i % 5 === 0) result += "Buzz";
    console.log(result || i);
  }
}

//test here
console.log(fizzBuzz(20)); //1 2 "Fizz" 4 "Buzz" "Fizz" 7 8 "Fizz" "Buzz" 11 "Fizz" 13 14 "FizzBuzz" 16 17 "Fizz" 19 "Buzz"