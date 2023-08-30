// Reverse the provided string and return the reversed string.

// For example, "hello" should become "olleh".

function reverseString(str) {
  let reversedStr = "";
  
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr.concat(str[i]);
  }

  return reversedStr;
}

//test here
console.log(reverseString("hello")); //olleh
console.log(reverseString("Howdy")); //ydwoH
console.log(reverseString("Greetings from Earth")); //htraE morf sgniteerG