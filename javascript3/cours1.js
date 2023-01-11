const p = document.querySelector('p');
p.classList.remove('class1');
p.classList.add('class4');
console.log(p.classList);


const span = document.querySelector('span');
const mesclasses = ['error', 'success', 'warning'];

let index = 0;
changeClass = () => {
    
    if (index >= mesclasses.length) {
        index = 0;
        span.setAttribute('class', '');
    }
    console.log(index);
    span.classList.add(mesclasses[index]);
    index++;
};

// changeClass(); // index = 0;
// changeClass(); // index = 1;
// changeClass(); // index = 2;

console.log(changeClass);

setInterval(changeClass, 1500);