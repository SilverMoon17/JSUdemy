'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeGreat : function (name) {       // Создание метода
        console.log(`Hello, ${name}!`);
    }
};


let counter = 0;

for (let key in options) {
    if (typeof(options[key]) == 'object' ) {
        for (let i in options[key]){
            console.log(`Свойство ${i} - значение: ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} - значение: ${options[key]}`);
        counter++;
    }
}
console.log('counter: ', counter);
console.log(Object.keys(options).length);
options.makeGreat("Alex");

const {border, background} = options.colors; // Деструктуризация
console.log(border); // black