let age1;
let text1 = `mon age est ${age1} et dans 5 ans j'aurai ${age1 + 5} ans`;

console.log(text1);


let age2 = null; // reinitialiser par exemple
let text2 = `mon age est ${age2} et dans 5 ans j'aurai ${age2 + 5} ans`;

console.log(text2);

age1 = 20;

console.log(age1 <= 30);
console.log(age1 == '20', age1 === '20', age1 !== '20');

let chaine = String(age1);
console.log(typeof chaine, chaine, 20);

let nombre = Number(chaine);
console.log(typeof nombre, nombre, 20);

let bool = Boolean('false'); // tout chaine est true, 0 false, - ou + true
console.log(typeof bool, bool, 'false');

