// await (attendre que la promise x soit 'resolved' pour continuer)

const x = async _ => {
    return 16;
}

const getX = async _ => {
    const number = await x();
    console.log(number);
}


getX();