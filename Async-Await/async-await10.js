const sleep = msec => {
    return new Promise(r => setTimeout(r, msec));
}

const x = _ => { return sleep(2000).then(v => 16); }
const y = _ => { return sleep(2000).then(v => 40); }
const z = _ => { return sleep(2000).then(v => 85); }

// -----------------------------------------------------
// -----------------------------------------------------
// const numbers = async _ => {
//     const getX = await x();
//     console.log(getX);
//     const getY = await y();
//     console.log(getY);
//     const getZ = await z();
//     console.log(getZ);
// }

// numbers();

// -----------------------------------------------------
// -----------------------------------------------------
const promiseAll = async _ => {
    const numbers = [x(), y(), z()];
    const [getX, getY, getZ] = await Promise.all(numbers);
    console.log(getX);
    console.log(getY);
    console.log(getZ);

}

promiseAll();