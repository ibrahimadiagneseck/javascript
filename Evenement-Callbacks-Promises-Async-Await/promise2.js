// ------------------PROMISE---------------------------------
const readLine = require('readline')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const demanderPrenom = () => {
    // resolve exécuté lorsque l'opération asynchrone est fini
    return new Promise(resolve => {
        rl.question('Quel est ton prénom?', resolve)
    })
}

const afficherPrenom = prenom => {
    console.log('Ton prénom est ' + prenom)
}

const demanderNom = () => {
    // resolve exécuté lorsque l'opération asynchrone est fini
    return new Promise(resolve => {
        rl.question('Quel est ton nom?', resolve)
    })
}

const afficherNom = nom => {
    console.log('Ton nom est ' + nom)
}

const demarrerProgramme = () => {

    demanderPrenom()
        .then(prenom => afficherPrenom(prenom))
        .then(() => demanderNom())
        .then(nom => afficherNom(nom))
        .then(nom => rl.close())
        
    
}

demarrerProgramme()

