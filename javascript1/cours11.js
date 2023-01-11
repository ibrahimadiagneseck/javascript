// Leteral object
const personne = {
    prenom: 'ibrahima',
    nom: 'pepere',
    email: 'ibrahima@esp.sn',
    taille: 1.90,
    niveaux: ['bac+1', 'bac+2', 'bac+3'],
    travailler: () => {
        console.log(`${this.nom} travail`);
    },
    afficherNiveaux: function() { // jamais en fonction flechée
        this.niveaux.forEach((niveau) => {
            console.log('affiche',niveau);
        });
    }
};

personne.niveaux[2] ='licence';

console.log(personne);
// console.log(personne.niveaux);
// console.log(personne.niveaux[2]);
// console.log(personne['prenom']);

const key = 'email';
console.log(personne[key]);

personne.travailler();
personne.afficherNiveaux();

