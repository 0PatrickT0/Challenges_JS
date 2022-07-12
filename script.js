"use strict";

// Challenge 3

/* let userName = prompt("Nom ?");
let lowerUserName = userName.toLowerCase();

const accepteNames = ["paul", "antoine"];

if (accepteNames.includes(lowerUserName)) {
  console.log(`Bonjour, ${userName}`);
} else {
  console.log("Go away!");
}
 */

/* let userName = "Pierre";
if (userName === "Pierre") {
  const city = "New York";
  if (city === "New York") {
    console.log("Welcome " + userName + " in " + city);
  } else {
    console.log("Welcome " + userName);
  }
  /// fonctionne correctement à l'intérieur du contexte de la condition
} else {
  console.log(userName);
  /// tu verras s'afficher Pierre
  console.log(city);
  /// tu verras une error 'reference error: city is not defined'
} */

/* let x = 12.2;
let res = x.toFixed(1) // arrondi à x chiffres après la virgule 1/2
console.log(Math.ceil(x)); // Ceil: Arrondit à l’entier au dessus.
console.log(res); // arrondi à x chiffres après la virgule 1/2
console.log(Math.round(x)); // Round: Arrondit.
console.log(Math.floor(x)); //Floor: Arrondit à l’entier au dessous.
console.log(Math.random()); //Random: sort un nombre au hazard entre 0 (inclus) et 1 (exclus). */

const poidsTailleBernard = {
  nom: "Bernard",
  poids: 78,
  taille: 1.69,
};
const poidsTailleMarcel = {
  nom: "Marcel",
  poids: 92,
  taille: 1.95,
};

function imc(poids, taille) {
  return poids / (taille * taille);
}

const bernardImc = imc(
  poidsTailleBernard.poids,
  poidsTailleBernard.taille
).toFixed(2);
console.log(bernardImc);

const marcelImc = imc(
  poidsTailleMarcel.poids,
  poidsTailleMarcel.taille
).toFixed(2);
console.log(marcelImc);

let bernardHigherIMC = false;

/* if (bernardImc > marcelImc) {
  bernardHigherIMC = true;
} */

/* console.log(bernardHigherIMC); */

/* let bernardHigherIMC2 = bernardImc > marcelImc ? true : false; */
/* console.log(bernardHigherIMC2); */

let bernardHigherIMC3 = bernardImc > marcelImc;
/* console.log(bernardHigherIMC3); */
/* if (bernardHigherIMC3 === true)  {
    console.log('Bernard a un IMC plus élevé que Marcel')
} else {
    console.log('Marcel a un IMC plus élevé que Bernard')
} */

bernardHigherIMC3 ? console.log(`Bernard a un IMC (${bernardImc}) plus élevé que Marcel (${marcelImc})`):console.log(`Marcel a un IMC (${marcelImc}) plus élevé que Bernard (${bernardImc})`);

if (bernardImc <25) {
    console.log(`${poidsTailleBernard.nom} insuffisance pondérale`)
} else if (bernardImc <30) {
    console.log(`${poidsTailleBernard.nom} Poids normal`)
} else if (bernardImc <35) {
    console.log(`${poidsTailleBernard.nom} Surpoids`)
} else if (bernardImc <45) {
    console.log(`${poidsTailleBernard.nom} Obésité`)
} else {
    console.log(`${poidsTailleBernard.nom} Obésité importante`)
}

if (marcelImc <25) {
    console.log(`${poidsTailleMarcel.nom} insuffisance pondérale`)
} else if (marcelImc <30) {
    console.log(`${poidsTailleMarcel.nom} Poids normal`)
} else if (marcelImc <35) {
    console.log(`${poidsTailleMarcel.nom} Surpoids`)
} else if (marcelImc <45) {
    console.log(`${poidsTailleMarcel.nom} Obésité`)
} else {
    console.log(`${poidsTailleMarcel.nom} Obésité importante`)
}

