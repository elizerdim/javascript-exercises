// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  return str
    .split(/\s+|_|-|(?=[A-Z])/)
    .join("-")
    .toLowerCase()
}

//test here
console.log(spinalCase("This Is Spinal Tap")); //this-is-spinal-tap
console.log(spinalCase("thisIsSpinalTap")); //this-is-spinal-tap
console.log(spinalCase("The_Andy_Griffith_Show")); //the-andy-griffith-show
console.log(spinalCase("Teletubbies say Eh-oh")); //teletubbies-say-eh-oh
console.log(spinalCase("AllThe-small Things")); //all-the-small-things