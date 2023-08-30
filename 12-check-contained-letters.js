// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.



//Here is my brute force solution to show that I can use the 'break' statement

function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();

  let matchCount = 0;
  
  for (let i = 0; i < arr[1].length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[0][j] === arr[1][i]) {
        matchCount++;
        break;
      }
    }
  }
  
  return matchCount === arr[1].length;
}

console.log(mutation(["hello", "hey"])); //false
console.log(mutation(["hello", "Hello"])); //true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); //true
console.log(mutation(["Mary", "Army"])); //true
console.log(mutation(["Mary", "Aarmy"])); //true
console.log(mutation(["Alien", "line"])); //true
console.log(mutation(["floor", "for"])); //true
console.log(mutation(["hello", "neo"])); //false
console.log(mutation(["voodoo", "no"])); //false
console.log(mutation(["ate", "date"])); //false
console.log(mutation(["Tiger", "Zebra"])); //false
console.log(mutation(["Noel", "Ole"])); //true


//And here is a much more sophisticated solution (also mine)
function mutationAlternative(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();

  for (let letter of arr[1]) {
    if (!arr[0].includes(letter)) return false;
  }

  return true;
}

//test here
console.log(mutationAlternative(["hello", "hey"])); //false
console.log(mutationAlternative(["hello", "Hello"])); //true
console.log(mutationAlternative(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); //true
console.log(mutationAlternative(["Mary", "Army"])); //true
console.log(mutationAlternative(["Mary", "Aarmy"])); //true
console.log(mutationAlternative(["Alien", "line"])); //true
console.log(mutationAlternative(["floor", "for"])); //true
console.log(mutationAlternative(["hello", "neo"])); //false
console.log(mutationAlternative(["voodoo", "no"])); //false
console.log(mutationAlternative(["ate", "date"])); //false
console.log(mutationAlternative(["Tiger", "Zebra"])); //false
console.log(mutationAlternative(["Noel", "Ole"])); //true