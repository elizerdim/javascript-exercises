// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  let smallNum = arr.sort((a, b) => a - b)[0];
  let largeNum = arr.sort((a, b) => a - b)[1];
  let range = [];

  for (let i = smallNum; i <= largeNum; i++) {
    range.push(i);
  }
  
  //a guaranteed common multiple is the multiplication of all the integers within the range
  let gtdCommonMultiple = range.reduce((multiple, num) => multiple * num);

  //check if there is a smaller common multiple
  //the smallest common multiple must be at least as large as the largest number, so start checking from the largest number
  for (let i = largeNum; i <= gtdCommonMultiple; i++) {
    if (range.every(num => i % num === 0)) return i;
  }
  
  return gtdCommonMultiple;
}

//test here
console.log(smallestCommons([1, 5])); //60
console.log(smallestCommons([2, 10])); //2520
console.log(smallestCommons([1, 13])); //360360
console.log(smallestCommons([23, 18])); //6056820