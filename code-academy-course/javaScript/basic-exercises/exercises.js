document.writeln('Hello, world');

var scape = "\n \n \n \f \r \tHello " + " \u0041 56.123456";
console.log(scape);
const output = document.querySelector('.output');
output.innerHTML = scape;

const myVariable = 'helloh';

let newWord = [];
for (let i = 0; i < myVariable.length; i++) {
    console.log(`the index of the letter: ${myVariable[i]} is: ${i}`);
    if (!myVariable[i].includes('h')) {
        newWord.push(myVariable[i])
    }
}

console.log(newWord.join(''));

const obj = ['obj1', 'obj2', 'obj3'];
for (let myvar in obj) {
    if (obj.hasOwnProperty(myvar)) {
        console.log(obj);
    }
}

const myNum = (num) => {
    for (let i = 0; i < num; i++) {
        if (i === 2) {
            break;
        };

        console.log(`number is ${i}, than it breaks`);
    }
}
myNum(100);

const nu = 'string'
let result = '';
for (let key in nu) {
    let letter = nu[key]
    if (letter === 'i') {
        break;
    }
    result += letter;
}
console.log(result);
