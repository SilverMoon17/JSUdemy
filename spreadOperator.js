'use strict';

let a = 5,
    b = a;

b = b + 5;
console.log('b: ', b);
console.log('a: ', a);

const obj = {
    a : 5,
    b : 1
};

const copyObj = obj;

copyObj.a= 10;
console.log('copyObj: ', copyObj);
console.log('obj: ', obj);

function copy(mainObj) {
    let objCopy = {};

    for (let key in mainObj) {
            objCopy[key] = mainObj[key];
        }
        return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const numbersCopy = copy(numbers);

numbersCopy.a = 15;
console.log('numbers: ', numbers);
console.log('numbersCopy: ', numbersCopy);

const add = {
    d: 17,
    e: 25
};

// console.log(Object.assign(add, numbers));

const copyAdd = Object.assign({}, add);

copyAdd.d = 1;
console.log('Add: ', add);
console.log('copyAdd: ', copyAdd);


const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log('internet: ', internet);



