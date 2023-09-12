// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

function checkCashRegister(price, cash, cid) {
  let status;
  let change = [];

  let totalCid = cid.reduce((sum, arr) => sum + arr[1], 0).toFixed(2);
  let changeDue = (cash - price).toFixed(2);

  const currencyUnits = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

  let currentChangeDue = changeDue;
  for (let i = cid.length - 1; i >= 0; i--) {
    let numOfBillsOrCoins = Math.floor(currentChangeDue / currencyUnits[i]);
    let currentChange = numOfBillsOrCoins * currencyUnits[i]; 

    if (cid[i][1] - currentChange < 0) {
      change.push(cid[i]);
      currentChangeDue = (currentChangeDue - cid[i][1]).toFixed(2);
    } else if (currentChange !== 0) {
      change.push([cid[i][0], currentChange]);
      currentChangeDue = (currentChangeDue - currentChange).toFixed(2);
    }
  }

  let totalChange = change.reduce((sum, arr) => sum + arr[1], 0).toFixed(2);

  if (totalChange < changeDue) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else if (totalCid == totalChange) {
    status = "CLOSED";
    change = cid;
  } else {
    status = "OPEN";
  }

  return {status, change};
}

//test here
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); //{status: "OPEN", change: [["QUARTER", 0.5]]}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); //{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); //{status: "INSUFFICIENT_FUNDS", change: []}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); //{status: "INSUFFICIENT_FUNDS", change: []}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); //{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}