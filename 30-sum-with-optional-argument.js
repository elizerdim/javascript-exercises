// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// If either argument isn't a valid number, return undefined.

function addTogether() {
  let [x, y] = arguments;

  if (arguments.length === 2 
    && typeof x === "number" 
    && typeof y === "number") return x + y;
  
  if (arguments.length === 1 
    && typeof x === "number") {
      return function(y) {
        if (typeof y === "number") return x + y;
    }
  }
}

//test here
console.log(addTogether(2, 3)); //5
console.log(addTogether(23, 30)); //53
console.log(addTogether("2", 3)); //undefined
console.log(addTogether(5, undefined)); //undefined
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")); //undefined
console.log(addTogether(5)); //[Function]
console.log(addTogether(5)(7)); //12
console.log(addTogether(2)([3])); //undefined
console.log(addTogether(2, "3")); //undefined