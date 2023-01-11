const link = document.createElement('a');
link.href = 'https://www.youtube.com/watch?v=Ny3iznrppnU&t=12954s';
link.innerText = 'Cours JS';

const body = document.querySelector('body');
body.appendChild(link); 



const lien = document.querySelector('a');
const href = lien.getAttribute('href');
console.log(href);
lien.innerHTML = 'gmail'
lien.setAttribute('style', 'color:white');
lien.setAttribute('style', 'font-size:40px');
lien.setAttribute('href', 'https://www.gmail.com'); // override

lien.style.color = 'yellow';
lien.style.textTransform= 'upperCase';