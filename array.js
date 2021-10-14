'use strict';

const arr = [1, 23, 13, 14, 65, 46, 8];

arr.sort((a, b) => {
    return a-b;
});
console.log(arr);

for (const item of arr) { // 1-ый способ
    console.log(item);
}

arr.forEach((item, i) => { // 2-ой способ
    console.log(`Элемент №${i + 1} - ${item}`);
});

const str = prompt("Введите ваши любимые товары", "");
const goods = str.split(","); // превращение строки в массив через разделитель
console.log('goods: ', goods.join(", "));

