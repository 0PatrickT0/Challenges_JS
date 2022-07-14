"use strict";

// Challenge 6

const dauphinsScores = [85, 54, 41];
const koalasScores = [23, 34, 27];

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let dauphinsScoreAverage = calcAverage(
  dauphinsScores[0],
  dauphinsScores[1],
  dauphinsScores[2]
);
let koalasScoreAverage = calcAverage(
  koalasScores[0],
  koalasScores[1],
  koalasScores[2]
);

function checkWinner() {
  if (dauphinsScoreAverage > koalasScoreAverage) {
    return `L'équipe dauphins gagne (${dauphinsScoreAverage} vs ${koalasScoreAverage})`;
  } else {
    return `L'équipe koalas gagne (${koalasScoreAverage} vs ${dauphinsScoreAverage})`;
  }
}

console.log(checkWinner());