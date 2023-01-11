let array1 = ['pomme', 'ananas', 'poire', 'banane']; 

array1.push('avocat', 'orange');

let orange = array1.pop();

console.log(array1);

console.log(typeof(array1));

array1[0] = 'papaye';
array1[4] = 'mangue';
console.log(array1);



let array2 = ['sac', 'maison', 30, 15, ['pomme', 'ananas', 'poire', 'banane']]; 

console.log(array2);

console.log(array2.indexOf('maison'));
console.log(array2.join(','));
console.log(array2.concat(['petit', 'moyen']));
console.log(array2.includes('maison'));



