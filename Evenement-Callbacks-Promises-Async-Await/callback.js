// ------------------CALLBACK---------------------------------
const readLine = require('readline')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const demarrerProgramme = () => {

    // methode 1
    const lirePrenom = prenom => {
        console.log('Ton prénom est ' + prenom)
        rl.close()
    }
    
    rl.question('Quel est ton prénom?', lirePrenom)

    // methode 2
    // rl.question('Quel est ton prénom?', (prenom) => {
    //     console.log('Ton prénom est ' + prenom)
    //     rl.close()
    // })
}

demarrerProgramme()

