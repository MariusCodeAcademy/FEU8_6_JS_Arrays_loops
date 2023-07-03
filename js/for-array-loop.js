'use strict';
console.log('for-array-loop.js file was loaded');

//      idx        0  1   2   3   4  5
const numsArray = [15, 1, 10, -5, 18, 0];
const numsArray2 = [4, 1, 1, -15];
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
function getMeTotal(arr) {
  // psiaudo kodas
  // sukti cikla per visa masyva
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    // ciklo metu deti visus skaicius i viena bendra
    let sk = arr[i];
    total = total + sk;
    // console.log('tarpine ===', total);
  }
  // po ciklu atspausdinti rezulta
  console.log('total ===', total);
  return total;
}
let tot1 = getMeTotal(numsArray);
let tot2 = getMeTotal(numsArray2);

getMeTotal([5, 5, 10]);
console.log('tot1 ===', tot1);
console.log('tot2 ===', tot2);
// sukurti funkcija getArrayTotal(arr) kuri apskaiciuoja ir grazina
// bendra bet kokio masyvo nariu suma

// parasyti funkcija kuri grazina bet kokio masyvo vidurki

// parasyti funkcija kuri grazina teigiamu skaiciu suma
//      idx             0   1   2   3   4  5
const numsArrayRand = [15, -1, 10, -5, 15, -5];

/**
 *
 * @param {array} arr
 */
function getPositivesTotal(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let sk = arr[i];
    // tikrinti ar teigiamas
    if (sk > 0) {
      // jei taip sudedam
      sum = sum + sk;
    }
  }
  console.log('sum ===', sum);
  return sum;
}
getPositivesTotal(numsArrayRand);
