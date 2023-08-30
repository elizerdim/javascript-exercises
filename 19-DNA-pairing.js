// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  let givenBaseArr = str.split("");
  let finalArr = [];
  let tempArr = [];

  for (let i = 0; i < givenBaseArr.length; i++) {
    tempArr.push(givenBaseArr[i]);

    let matchingBase;

    switch (givenBaseArr[i]) {
      case "A":
        matchingBase = "T";
        break;
      case "T":
        matchingBase = "A";
        break;
      case "C":
        matchingBase = "G";
        break;
      case "G":
        matchingBase = "C";
        break;
    }

    tempArr.push(matchingBase);
    finalArr.push(tempArr);
    tempArr = [];
  }

  return finalArr;
}

//test here
console.log(pairElement("ATCGA")); //[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log(pairElement("TTGAG")); //[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
console.log(pairElement("CTCTA")); //[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]


// Here is a more elegant solution that uses an object -- I wish it was mine

function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  return str
    .split("")
    .map(x => [x, pairs[x]]);
}