"use strict";

// Challenge 4

const dauphinsScoreMatch1Text = prompt("Match1, score Dauphins ?");
const dauphinsScoreMatch1 = parseInt(dauphinsScoreMatch1Text);
const dauphinsScoreMatch2Text = prompt("Match2, score Dauphins ?");
const dauphinsScoreMatch2 = parseInt(dauphinsScoreMatch2Text);
const dauphinsScoreMatch3Text = prompt("Match3, score Dauphins ?");
const dauphinsScoreMatch3 = parseInt(dauphinsScoreMatch3Text);

const koalasScoreMatch1Text = prompt("Match1, score Koalas ?");
const koalasScoreMatch1 = parseInt(koalasScoreMatch1Text);
const koalasScoreMatch2Text = prompt("Match2, score Koalas ?");
const koalasScoreMatch2 = parseInt(koalasScoreMatch2Text);
const koalasScoreMatch3Text = prompt("Match3, score Koalas ?");
const koalasScoreMatch3 = parseInt(koalasScoreMatch3Text);

function scoresAverage(donnée1, donnée2, donnée3) {
  return (donnée1 + donnée2 + donnée3) / 3;
}

const dauphinsScoresAverage = scoresAverage(
  dauphinsScoreMatch1,
  dauphinsScoreMatch2,
  dauphinsScoreMatch3
);
console.log(dauphinsScoresAverage.toFixed(0));

const koalasScoresAverage = scoresAverage(
  koalasScoreMatch1,
  koalasScoreMatch2,
  koalasScoreMatch3
);
console.log(koalasScoresAverage.toFixed(0));

if (dauphinsScoresAverage > koalasScoresAverage) {
  console.log("Victoire des Dauphins");
} else if (koalasScoresAverage > dauphinsScoresAverage) {
  console.log("Victoire des Koalas");
} else {
  console.log("Egalité");
}

if (dauphinsScoresAverage>100 || koalasScoresAverage>100) {
    if (dauphinsScoresAverage > koalasScoresAverage) {
    console.log("Victoire des Dauphins");
    } else if (koalasScoresAverage > dauphinsScoresAverage) {
    console.log("Victoire des Koalas");
    } else {
    console.log("Egalité");
    }
} else {
    console.log("Pas de gagnant");
}