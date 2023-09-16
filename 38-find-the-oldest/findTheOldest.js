const findTheOldest = function(people) {  
  const date = new Date();
  const currentYear = date.getFullYear();

  const agesArr = people.reduce((arr, person) => {
    let age = (person.yearOfDeath ?? currentYear) - person.yearOfBirth;
    arr.push(age);
    return arr;
  }, []);

  return people[agesArr.indexOf(Math.max(...agesArr))];
};


// Do not edit below this line
module.exports = findTheOldest;