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

// Callback hell version
getData().then(x => {
    moarData(x).then(y => {
        moarrData(y).then(z => {
            moarrrData(z).then(xyz => {
                console.log(xyz); // MoarrrData from MoarrData from MoarData from Data from getData
            });
        });
    });
});


