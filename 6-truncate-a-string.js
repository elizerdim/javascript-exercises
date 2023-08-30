// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num) + "...";
  }
}

//test here
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); //A-tisket...
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); //Peter Piper...
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); //A-tisket a-tasket A green and yellow basket
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); //A-tisket a-tasket A green and yellow basket
console.log(truncateString("A-", 1)); //A...
console.log(truncateString("Absolutely Longer", 2)); //Ab...