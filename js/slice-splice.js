'use strict';
console.log('slice-splice.js file was loaded');

// idx               0          1            2        3
const weekDays = ['monday', 'wednesday', 'friday', 'sunday'];
console.log('weekDays ===', weekDays);

// array.slice(startIdx, finishIdx)
// iskirpti atkarpa is masyvo, nemodifikuoja orginalo, grazina rezultata
let atkarpa = weekDays.slice(1, 3);
console.log('atkarpa ===', atkarpa);

// sekli masyvo kopija

let weekCopy = weekDays.slice();
console.log('weekCopy ===', weekCopy);

// splice() - multitool

// array.splice(index, howmany, item1, ....., itemX)
// index - nuo kur pradedam
// howmany - kiek istrinti,
// item1, ....., itemX kiek nauju prideti

// istrinti pirma ir antra elementus
// weekDays.splice(0, 2);

// prideti tuesday
weekDays.splice(1, 0, 'tuesday');
console.log('weekDays po splice ===', weekDays);

// ideti saturday
weekDays.splice(4, 0, 'saturday', 7);
console.log('weekDays po splice ===', weekDays);

// pasalinti 7 is masyvo nezinan index
// surasti index
const idxDelete = weekDays.indexOf(7);
console.log('idxDelete ===', idxDelete);
// pasalinti is masyvo
weekDays.splice(idxDelete, 1);
console.log('weekDays ===', weekDays);
