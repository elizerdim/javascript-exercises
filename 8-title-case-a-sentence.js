// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

//Here is my solution
function titleCase(str) {
  let words = str.split(" ");
  let capitalizedWords = []
  for (let i = 0; i < words.length; i++) {
    capitalizedWords.push(words[i][0].toUpperCase() + words[i].slice(1).toLowerCase());
  }
  return capitalizedWords.join(" ");
}

console.log(titleCase("I'm a little tea pot")); //"I'm A Little Tea Pot"
console.log(titleCase("sHoRt AnD sToUt")); //"Short And Stout"
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); //"Here Is My Handle Here Is My Spout"


//Here is a more sophisticated and advanced solution
function titleCaseAlternative(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}