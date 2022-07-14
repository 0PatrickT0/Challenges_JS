"use strict";

// Challenge 7

let bills = [125, 555, 44];
let tip = 0;
let billAndTip = 0;
let tips = [];
let billsAndTips = [];

const calcTip = (bills) => {
  if (bills >= 50 && bills <= 300) {
    tip = bills * 0.15;
  } else {
    tip = bills * 0.2;
  }
  billAndTip = bills + tip;
  tips.push(tip);
  billsAndTips.push(billAndTip);
};

for (let i = 0; i < bills.length; i++) {
  calcTip(bills[i]);
}

console.log(bills);
console.log(tips);
console.log(billsAndTips);
