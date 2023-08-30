// Return an array consisting of the largest number from each provided sub-array.

function largestOfEach(arr) {
  let arrOfLargest = [];

  for (let i = 0; i < arr.length; i++) {
    let largestInSubArr = -Infinity;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestInSubArr) {
        largestInSubArr = arr[i][j];
      }
    }
    arrOfLargest.push(largestInSubArr);
  }
  
  return arrOfLargest;
}

//test here
console.log(largestOfEach([[4, 5, 1], [13, 27, 18, 26, 36], [32, 35, 37, 39, 45, 92], [1000, 1001, 857, 1, 489, 295, 382, 249]])); //[5, 36, 92, 1001]
console.log(largestOfEach([[13, 27, 18, 26, 34], [4, 5, 8, 9], [32], [1000, 1001, 857, 1, 345]])); //[34, 9, 1001]
console.log(largestOfEach([[4, 9], [13, 35, 18], [34, 34, 34, 34], [1000000, 1001, 857, 1, 293465]])); //[9, 35, 34, 1000000]
console.log(largestOfEach([[17, 23, 25, 12], [25, 7, 48], [4, -10, 18, 21, 15, 9], [-72, -3, -17, -10]])); //[25, 48, 21, -3]