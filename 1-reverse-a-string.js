// Reverse the provided string and return the reversed string.

// For example, "hello" should become "olleh".

function reverseString(str) {
  let reversedStr = "";
  
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr.concat(str[i]);
  }

  return reversedStr;
}

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));