ma_fonction();

function ma_fonction() {
    console.log('ma_fonction');
}
// ---------------------------------
// fonction par expression
const maFonction1 = function() {
    console.log('maFonction');
};

maFonction1();

const maFonction2 = function(p1, p2) {
    return p1 + ' puissance ' + p2 + ' = ' + (p1 ** p2);
};

let rslt = maFonction2(2, '2');
console.log(rslt);
// ---------------------------------
// arrow function
const salutation = (name = 'unknow') => {
    name = name.toUpperCase();
    console.log('salutation', name);
};

salutation();


const maFonction3 = (p1, p2) => p1 ** p2;

console.log(maFonction3(4, 2));

