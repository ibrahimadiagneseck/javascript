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

const demanderNom = () => {
    // resolve exécuté lorsque l'opération asynchrone est fini
    return new Promise(resolve => {
        rl.question('Quel est ton nom?', resolve)
    })
}

const demarrerProgramme = () => {

    const lirePrenom = prenom => {
        console.log('Ton prénom est ' + prenom)
    }
    
    const lireNom = nom => {
        console.log('Ton nom est ' + nom)
        rl.close()
    }

    demanderPrenom()
        .then(prenom => {
            lirePrenom(prenom)
            return demanderNom()
        })
        .then(nom => {
            lireNom(nom)
        })
        
    
}

demarrerProgramme()

