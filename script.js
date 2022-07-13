"use strict";

// Challenge 5

let tauxPourboire = 0
let addition = prompt("Montant de la note ?");
addition = parseFloat(addition);

//if (addition >=50 && addition <=300) {
//    tauxPourboire = 0.15;
//} else {
//    tauxPourboire = 0.20;
//}

addition >=50 && addition <=300 ? tauxPourboire = 0.15 : tauxPourboire = 0.20;

let pourboire = (addition*tauxPourboire);
let factureTotale = (addition + pourboire);

console.log(factureTotale)
console.log(`La note était de ${addition.toFixed(2)}, le pourboire de ${pourboire.toFixed(2)} et la valeur totale était de ${factureTotale.toFixed(2)}`);