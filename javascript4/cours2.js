// Nullish coalescing
console.log('------------------------');
const foo = null ?? 'Hello'; // null or undefinied => 'Hello'
console.log(foo);
const bar = 'Not null' ?? 'Hello';
console.log(bar);
const baz = 0 ?? 'Hello';
console.log(baz);
const bav = false ?? 'Hello';
console.log(bav);



// Chainage optionnel
console.log('------------------------');
const book = {
    id: 1,
    title: 'title',
    author: null,
    printValue: function () {
        return `${this.id} ${this.title}`;
    }
}; 
// console.log(book.author.age); // throw error
console.log(book.author && book.author.age); // null
console.log(book.author?.age); // optional chaining : undefined
console.log(book.author?.address?.city); // deep optional chaining : undefined

console.log(book.printValue());
console.log(book.uneFonction?.()); // undefined


// Double exclamaton operator
console.log('------------------------');
const greeting = 'Hello there!';
console.log(!!greeting); // true
const noGreeting1 = '';
console.log(!!noGreeting1); // false
const noGreeting2 = 0;
console.log(!!noGreeting2); // false

// Convertir
console.log('------------------------');
const stringNumber = '123';
console.log(typeof +stringNumber);

const myString = 123 + '';
console.log(typeof myString);

// Array
console.log('------------------------');
const monArray = [null, false, 'Hello', undefined, 0];
const filtered = monArray.filter(Boolean); // enlever toutes les valeurs fausses
console.log(filtered); // ['Hello']

const anyTruethy = monArray.some(Boolean); // si au moins une valeur est vrai
console.log(anyTruethy); // true

const allTruethy = monArray.every(Boolean); // si toutes les valeur sont vraix
console.log(allTruethy); // false

// Aplatissement des tableaux de tableaux // Flattening Arrays of Arrays
console.log('------------------------');
const myArray = [{id: 1}, [{id: 2}], [{id: 3}]];
const flattedArray = myArray.flat();
console.log(myArray);
console.log(flattedArray);

const arr = [0, 1, 2,[[[3, 4]]]];
console.log(arr.flat(1)); 
console.log(arr.flat(2)); // [0, 1, 2, [3, 4]]
console.log(arr.flat(3)); // [0, 1, 2, 3, 4]

