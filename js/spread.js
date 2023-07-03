'use strict';
console.log('spread.js file was loaded');

// idx               0          1            2        3
const weekDays = ['monday', 'wednesday', 'friday', 'sunday'];
console.log('weekDays ===', weekDays);
const colors = ['red', 'green'];

// spread operator ...
// isskleidzia masyvo reiksmes

const shalowCopy = [...weekDays];
console.log('shalowCopy ===', shalowCopy);

const sujungti = [true, ...weekDays, 5, ...colors];
console.log('sujungti ===', sujungti);

let nums = [40, 5, 10];
let maxValue = Math.max(...nums);
console.log('maxValue ===', maxValue);
