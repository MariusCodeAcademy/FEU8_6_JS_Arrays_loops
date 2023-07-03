'use strict';
console.log('for-array-loop.js file was loaded');

//      idx        0  1   2   3   4  5
const numsArray = [15, 1, 10, -5, 18, 0];
const colors = ['red', 'green', 'blue'];
console.log('numsArray ===', numsArray);

// atspausdinti kiekviena masyvo reikme
// console.log(numsArray[0]);
// console.log(numsArray[1]);
// console.log(numsArray[2]);
// console.log(numsArray[3]);
// console.log(numsArray[4]);
// console.log(numsArray[5]);

// for ciklas kuris juda per visa masyvo ilgi
/* 
for (let i = 0; i < <masyvoPavadinimas>.length; i++) {
  let el = <masyvoPavadinimas>[i];
  // logika ir uzduotys ka padaryt
}
*/
// atspausdinam elementus
for (let i = 0; i < numsArray.length; i++) {
  let el = numsArray[i];
  // console.log('el ===', el);
}

// atspausdinti elementus mazesnius uz 5
for (let i = 0; i < numsArray.length; i++) {
  let sk = numsArray[i];
  if (sk < 5) {
    console.log('sk ===', sk);
  }
}

// sudeti i nauja masyva visas reikmes mazesnes uz 5
let mazesniUz5 = [];
for (let i = 0; i < numsArray.length; i++) {
  let sk = numsArray[i];
  if (sk < 5) {
    mazesniUz5.push(sk);
  }
}
console.log('mazesniUz5 ===', mazesniUz5);

// sukurti funkcija kuri grazina teigiamas masyvo reiksmes naujame
// masyve
function positivesArr() {
  let positives = [];
  for (let i = 0; i < numsArray.length; i++) {
    let sk = numsArray[i];
    if (sk > 0) {
      // deti ji i masyva
      positives.push(sk);
    }
  }
  console.log('positives ===', positives);
  return positives;
}
// debugger;
let posRezul = positivesArr();
console.log('posRezul ===', posRezul);

// suskaiciuoti kiei yra bendra numsArray suma (su funkcija)
