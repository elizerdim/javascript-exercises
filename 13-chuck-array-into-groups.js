// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let chunkedArray = [];
  let subArray = [];
  
  for (let i = 0; i < arr.length; i++) {

    if (i > 0 && i % size === 0) {
      chunkedArray.push(subArray);
      subArray = [];
    }

    subArray.push(arr[i]);
  }
  
  chunkedArray.push(subArray);
  return chunkedArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); //[["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); //[[0, 1, 2], [3, 4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); //[[0, 1], [2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); //[[0, 1, 2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); //[[0, 1, 2], [3, 4, 5], [6]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); //[[0, 1, 2, 3], [4, 5, 6, 7], [8]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); //[[0, 1], [2, 3], [4, 5], [6, 7], [8]]