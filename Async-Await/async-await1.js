// Await Intro (async return promise)

const x = async _ => {
    return 16;
}

const y = async () => {
    return 17;
}

console.log(x()); // Promise { 16 }
console.log(y()); // Promise { 17 }

