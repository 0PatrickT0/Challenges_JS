"use strict";

// Challenge 9

//Exercice 1

const hiddenMessage = [
  "X",
  "X",
  "X",
  "X",
  "W",
  "X",
  "E",
  "X",
  "X",
  "X",
  "X",
  "X",
  "L",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "L",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  " ",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "D",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "O",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "N",
  "X",
  "X",
  "X",
  "X",
  "E",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  ",",
  "X",
  " ",
  "X",
];
let secretMessage = [];

const decryptMessage = (hiddenMessage) => {
  if (hiddenMessage != "X") {
    secretMessage.push(hiddenMessage);
  }
};

for (let i = 0; i < hiddenMessage.length; i++) {
  decryptMessage(hiddenMessage[i]);
}

console.log(secretMessage);

// Exercice 2

const hiddenCode =
  "XXXXXXXXXXXXXXXXXXXXXXXXXXXCXXXXXXXOXXXXXDXXXXXXXXXXXXXXXEXXXX XXXXXXXXXXXXXXX:X0XXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX3XXXXXX2XXXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX6XXXXXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX7XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXXXXXXXXX8XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX8XXXXXXXXXXX4XXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXX9XXXX9XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXX4XXXXXXXXXXX6XXXXXXXXX2XXXXXXXX3XXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXX";

let secretMessageTwo = [];
let hiddenCodeArray = hiddenCode.split("");
console.log(hiddenCodeArray);

const decryptMessageTwo = (hiddenCodeArray) => {
  if (
    hiddenCodeArray != "X" &&
    hiddenCodeArray != "0" &&
    hiddenCodeArray != "2" &&
    hiddenCodeArray != "4" &&
    hiddenCodeArray != "6" &&
    hiddenCodeArray != "8"
  ) {
    secretMessageTwo.push(hiddenCodeArray);
  }
};

for (let i = 0; i < hiddenCodeArray.length; i++) {
  decryptMessageTwo(hiddenCodeArray[i]);
}
console.log(secretMessageTwo);
