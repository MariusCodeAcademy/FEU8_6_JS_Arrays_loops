'use strict';
console.log('array.js file was loaded');

// Masyvas yra numeruota collekcija

// idx          0        1       2
let colors = ['red', 'green', 'blue'];
console.log('colors ===', colors);

// gauti reiksme is masyvo pagal index
let secondColor = colors[1];
console.log('secondColor ===', secondColor);

// irasyti reiksme i masyva pagal index
colors[1] = 'violet';
console.log('colors ===', colors);

colors[3] = 'black';
let treciasEL = colors[3];
console.log('treciasEL ===', treciasEL);
