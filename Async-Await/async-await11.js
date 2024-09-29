const numbers = {
    x: 16,
    y: 40,
    z: 85
};

const letterNumbers = ["x", "y", "z"]

const sleep = msec => {
    return new Promise(r => setTimeout(r, msec));
}

const getNumbers = number => {
    return sleep(1000).then(v => numbers[number]); 
}

const myLoop = async _ => {
    for (let i = 0; i < letterNumbers.length; i++) {
        const number = letterNumbers[i];
        const myNumbers = await getNumbers(number);
        console.log(myNumbers);
    }
}

myLoop();