// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

function uniteUnique(...arrs) {
  let newArr = [];

  arrs.forEach(arr => arr.forEach(item => {
    if (!newArr.includes(item)) newArr.push(item);
  }))

  return newArr;
}

//test here
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); //[1, 3, 2, 5, 4]
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); //[1, 2, 3, 5]
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); //[1, 2, 3, 5, 4, 6, 7, 8]
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6])); //[1, 3, 2, 5, 4, 6]
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])); //[1, 3, 2, 5, 4]


//This alternative solution uses the feature of indexOf() method that it only returns the index of the first occurrence in order to filter out the duplicates - not mine
function uniteUniqueAlternative() {
  return [...arguments]
    .flat()
    .filter((item, ind, arr) => arr.indexOf(item) === ind);
}