// Remove all falsy values from an array. Return a new array; do not mutate the original array.

function bouncer(arr) {
  let truthiesArr = [];
  for (const elem of arr) {
    if (elem) truthiesArr.push(elem);  
  }
  return truthiesArr;
}

console.log(bouncer([7, "ate", "", false, 9])); //[7, "ate", 9]
console.log(bouncer(["a", "b", "c"])); //["a", "b", "c"]
console.log(bouncer([false, null, 0, NaN, undefined, ""])); //[]
console.log(bouncer([null, NaN, 1, 2, undefined])); //[1, 2]