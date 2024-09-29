// await-async 

const newX = async (success = true) => {
    if(success) return 16;
    throw new Error("Problème!");
    
}

const getX = async _ => {
    try {
        const number = await newX(false);
        console.log(number);
    } catch (e) {
        console.log(e);
    }
}

getX();