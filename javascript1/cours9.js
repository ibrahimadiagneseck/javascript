let val = 10;

switch (val) {
    case 10:
        console.log('c\'est ' + val);
        break;

    default:
        console.log('RIEN');
        break;
}

let nombres = [2, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < nombres.length; i++) {
    
    if ((nombres[i] % 2) == 0) {
        console.log(`${nombres[i]} est paire`);
        continue;
    } 

    console.log(`${nombres[i]} est impaire`); 
    break;   
}

