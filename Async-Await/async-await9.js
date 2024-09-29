const sleep = msec => {
    return new Promise(r => setTimeout(r, msec));
}

const x = _ => { return sleep(2000).then(v => 16); }
const y = _ => { return sleep(2000).then(v => 40); }
const z = _ => { return sleep(2000).then(v => 85); }

const getX = async _ => {
    const number = await x();
    console.log(number);
}

getX();