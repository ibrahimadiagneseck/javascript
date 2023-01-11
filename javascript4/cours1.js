 
const list_p = document.querySelectorAll('p');

list_p.forEach((p) => {

    if (p.innerText.includes('error')) {
        console.log(p.innerText);
        p.classList.add('error');
    }
});


// spread operator
let condition = true;
let personne = {
    id: 1,
    nom: 'pepere',
    ... (condition && {age: 23})
}

console.log(personne);
console.log('nom' in personne);

const dynamic = 'saveur';
let item = {
    nom: 'biscut',
    [dynamic]: 'chocolat'
}
console.log(item);

const pers = {id: 1, name: 'pepere'};
const {id, name} = pers;
let {id: identifiant} = pers
let nom_prop = 'name'
let {[nom_prop] : nom} = pers;
console.log(name);
console.log('identifiant : '+identifiant+' ou id : '+id);
console.log('nom : '+nom);






