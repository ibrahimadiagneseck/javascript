const sleep = msec => {
    return new Promise(r => setTimeout(r, msec));
}

sleep(3000).then(value => { console.log("3 seconds !"); });