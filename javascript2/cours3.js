const h1 = document.querySelector('h1');
console.log(h1.innerText);

// modifier le HTML
h1.innerText = (h1.innerText).toUpperCase();


const div = document.querySelector('.contenu');
console.log(div.innerHTML);


const personne = ['paragraphe3', 'paragraphe4', 'paragraphe5'];

personne.forEach((element) => {
    div.innerHTML += `<p>${element}</p>`;
});

