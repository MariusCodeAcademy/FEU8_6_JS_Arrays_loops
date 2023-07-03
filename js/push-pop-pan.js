'use strict';
console.log('push-pop-pan.js file was loaded');

// idx          0        1       2
let colors = ['red', 'green', 'blue'];
console.log('colors ===', colors);

// Push. array.prototype.push('newEl')

// prideti spalva violet
colors.push('violet');
console.log('colors ===', colors);

// panaikinti paskutini elementa
// array.pop()
let lastEl = colors.pop();
console.log('lastEl ===', lastEl);
console.log('colors after pop ===', colors);

// panaikinti pirma masyvo elementa
// array.shift()
let firstEl = colors.shift();
console.log('firstEl ===', firstEl);
console.log('colors after shift ===', colors);

// prideti elementa i masyvo prieki
// array.unshift('newEl')

// colors.unshift('tomato', firstEl, lastEl);
colors.unshift('tomato');
console.log('colors after unshifta ===', colors);

// masyvo ilgis
// array.length()
let howMany = colors.length;
console.log('howMany ===', howMany);

// pakeisti paskutini masyvo elementa

colors[howMany - 1] = 'black';
console.log('colors after howMany ===', colors);

// idx          0        1       2
colors = ['red', 'green', 'blue'];
let colors2 = ['tomato', 'pink', 5];

// sujungti abu masyvu i viena ir atspausdinti su
// array.concat()

let sujungta = colors.concat(colors2);
console.log('sujungta ===', sujungta);
console.log('colors ===', colors);
console.log('colors2 ===', colors2);
