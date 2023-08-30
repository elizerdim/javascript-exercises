// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// for example, "abce" should return "d" 

function fearNotLetter(str) {
  let letterCodesArr = str
    .split("")
    .map(letter => letter.charCodeAt(0));

  for (let i = str[0].charCodeAt(); i <= str[str.length - 1].charCodeAt(); i++) {
    if (!letterCodesArr.includes(i)) return String.fromCharCode(i)
  }
}

//test here
console.log(fearNotLetter("abce")); //d
console.log(fearNotLetter("abcdefghjklmno")); //i
console.log(fearNotLetter("stvwx")); //u
console.log(fearNotLetter("bcdf")); //e
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); //undefined