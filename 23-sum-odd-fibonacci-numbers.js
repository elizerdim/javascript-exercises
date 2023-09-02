// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  if (num < 1) return;

  let sequence = [0, 1];
  
  while (sequence[sequence.length - 1] <= num) {
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])
  };

  //remove the last number from the array because the while loop goes beyond the num by one value
  if (sequence[sequence.length - 1] > num) sequence.pop();

  let oddNums = sequence.filter(number => number % 2 === 1);

  return oddNums.reduce((sum, number) => sum + number);
}

//test here
console.log(sumFibs(1000)); //1785
console.log(sumFibs(4000000)); //4613732
console.log(sumFibs(4)); //5
console.log(sumFibs(75024)); //60696
console.log(sumFibs(75025)); //135721