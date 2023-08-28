// Return the factorial of the provided integer.

// Only integers greater than or equal to zero will be supplied to the function.

// I used recursion to solve this problem.
function factorialize(num) {
  let factorializedNum;
  
  if (num < 1) {
    factorializedNum = 1;
  } else {
    factorializedNum = factorialize(num - 1) * num;
  }
  return factorializedNum;
}

console.log(factorialize(5)); //120
console.log(factorialize(10)); //3628800
console.log(factorialize(20)); //2432902008176640000
console.log(factorialize(0)); //1