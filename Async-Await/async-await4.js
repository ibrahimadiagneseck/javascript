// error

const newX = async (success = true) => {
    if(success) return 16;
    throw new Error("Problème!");
    
}

newX(false).catch(e => console.log(e)); // Error: Problème!