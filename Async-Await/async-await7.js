// Simulation des fonctions retournant des promesses
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Data from getData'), 1000);
    });
}

function moarData(data) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`MoarData from ${data}`), 1000);
    });
}

function moarrData(data) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`MoarrData from ${data}`), 1000);
    });
}

function moarrrData(data) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`MoarrrData from ${data}`), 1000);
    });
}



// Async/await version
async function foo() {
    const x = await getData();
    const y = await moarData(x);
    const z = await moarrData(y);
    const xyz = await moarrrData(z);

    console.log(xyz); // MoarrrData from MoarrData from MoarData from Data from getData
    return xyz;
}

foo(); // Appelle la fonction async
