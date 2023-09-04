function orbitalPeriod(arr) {
  const newArr = [];
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  arr.forEach(obj => {
    let orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(obj.avgAlt + earthRadius, 3) / GM));
    newArr.push({name: obj.name, orbitalPeriod})
  })

  return newArr;
}

//test here
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])); //[{name: "sputnik", orbitalPeriod: 86400}]
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])); //[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]