// Flatten a nested array. You must account for varying levels of nesting.

//Don't use the flat() method or any global variables.


//I feel like I cheated on the second restriction by using a nested function but oh well... At least I didn't use flat(). And it's also a good excuse to show that I understand nested functions and closure.
function steamrollArray(arr) {  
  let flatArr = [];
  
  function addItems(item) {
    if (!Array.isArray(item)) {
      flatArr.push(item);
    } else {
      for (let i = 0; i < item.length; i++) {
        addItems(item[i]);
      }
    }
  }

  addItems(arr); 

  return flatArr;
}

//test here
console.log(steamrollArray([[["a"]], [["b"]]])); //["a", "b"]
console.log(steamrollArray([1, [2], [3, [[4]]]])); //[1, 2, 3, 4]
console.log(steamrollArray([1, [], [3, [[4]]]])); //[1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]])); //[1, {}, 3, 4]


//Here is an alternative solution (not mine) that recursively uses the function with the spread operator, which is possible because the function returns an array
function steamrollArrayAlt(arr) {
  const flattenedArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray.push(...steamrollArrayAlt(arr[i]));
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};