// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

function binaryAgent(str) {
  return str.split(" ")
    .map(code => String.fromCharCode(parseInt(code, 2)))
    .join("")
}

//test here
console.log(binaryAgent("01001000 01100101 01101100 01101100 01101111 00101100 00100000 01110111 01101111 01110010 01101100 01100100 00100001")); //Hello, world!
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")); //Aren't bonfires fun!?