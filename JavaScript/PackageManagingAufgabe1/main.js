const isOdd = require('is-odd');

const number = 7;  

//Alternative I
// ? prüft ob number = ungerade => True, wenn False, dann => gerade
console.log(`Ist ${number} gerade oder ungerade? ${isOdd(number) ? 'Ungerade' : 'Gerade'}`)

//Alternative II
//const result = isOdd(number);
//console.log(`Ist ${number} ungerade? ${result}`);


