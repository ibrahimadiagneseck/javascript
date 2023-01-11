let i = 0;

while (i < 5) {
    console.log(`Boucle : ${i}`); 
    i++;
}
console.log('-------------------');


let array1 = ['pomme', 'ananas', 'poire', 'banane'];

for (i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}
console.log('-------------------');

i = 0;
while (i < array1.length) {
    console.log(`${array1[i].toUpperCase()}`);
    i++;
}
console.log('-------------------');

i = 3;
do {
    console.log(`${array1[i].toUpperCase()}`);
    i++;
} while (i < array1.length)
console.log('-------------------');
