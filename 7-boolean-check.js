// Check if a value is classified as a boolean primitive. Return true or false.

function booWho(bool) {
  return typeof bool === "boolean";
}

//test here
console.log(booWho(true)); //true
console.log(booWho(false)); //true
console.log(booWho([1, 2, 3])); //false
console.log(booWho({ "a": 1 })); //false
console.log(booWho(1)); //false
console.log(booWho(NaN)); //false
console.log(booWho("a")); //false
console.log(booWho("true")); //false
console.log(booWho("false")); //false