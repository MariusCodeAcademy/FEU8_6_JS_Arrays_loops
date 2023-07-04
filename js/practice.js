'use strict';
console.log('practice.js file was loaded');
//               0  1   2    3
const numsArr = [2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20];
console.log('numsArr ===', numsArr);
const numCopy = numsArr.slice();
const numCopy1 = [...numsArr];
// Sukurti funkciją, kuri ima masyvą ir grąžina didžiau-
//sią skaičių masyve.

// Psiaudo kodas

// sukti cikla per visa masyva gaunant kiiekviena reiksme
// lygininti kiekviena reiksme ir ziureti kuri mazesne.
// lyginti su paciu pirmu elementu.
// jei randam mazesni, jis tampa minimaliu
// po ciklu minimalus yra minimumas

/*
let minimalus = <pirmam masyvo elementui>
for (<ciklas per masyva>) {
<ar minimalus yra mazesnis uz dabartini elementa> ?
  taip - minimalus lieka tas pats
  ne - dabartinis elementas yra naujas minimalus
}

*/

// 1. Padauginti masyvo narius iš 2

function multi2() {
  // let double = [];
  for (let i = 0; i < numsArr.length; i++) {
    let sk = numsArr[i];
    // console.log('sk ===', sk);
    // double.push(sk * 2);
    numsArr[i] = sk * 2;
  }
  console.log('numsArr ===', numsArr);
}
// multi2();
console.log('numsArr ===', numsArr);

/*
1uzduotis

- Sukurti funkcija kuri grazintu masyva su pirmu ir paskutiniu nariu
  firstAndLast(arr) // [2, 8]
- sukurti funkcija kuri grazintu visu skaiciu suma kurie yra didesni uz 4
  moreThan4(arr) // 19
- sukurti funkcija kuri grazina 2 masyvo nari is duotojo
  second(arr) // 3
*/
//                         0  1  2    3   4
const numberWithStrings = [2, 3, '5', 6, '8'];

const otherArr = [4, 1, '5', 16, 12, 18, 7];
console.log('numberWithStrings ===', numberWithStrings);

function firstAndLast(arr) {
  let pirmasEl = arr[0];
  let paskElIndex = arr.length - 1;
  let paskutinisEl = arr[paskElIndex];
  let naujasMasyvas = [pirmasEl, paskutinisEl];
  return naujasMasyvas;
}

let rez = firstAndLast(numberWithStrings);
rez = firstAndLast(otherArr);
console.log('rez ===', rez);

// psiaudo kodas
function moreThan4() {
  let total = 0;
  // sukti cikla
  for (let i = 0; i < numberWithStrings.length; i++) {
    let sk = numberWithStrings[i];
    // tikrinti ar sk yra daugiau uz 4
    if (sk > 4) {
      // jei taip sumuoti
      total = total + Number(sk);
    }
    // jei ne praleisti
  }
  // grazinti suma
  return total;
}
let rezult = moreThan4();
console.log('rezult ===', rezult);

function second(arr) {
  const antras = arr[1];
  console.log('antras ===', antras);
  return antras;
}
second(numberWithStrings);
second(otherArr);
