'use strict';

let choice = confirm("Are you here?"); // возвращает true/false
console.log('choice: ', choice);

let age = prompt("Введите ваш возраст!", "18"); /* возвращает введенные данные в виде строки(string), 
                                                   если данные не введены, вводит значение "18" */
let ageNumber = +prompt("Введите ваш возраст!", "18"); /* "+" возвращает введенные данные в виде числа(number) */
console.log('age: ', age);

let answers = [];

answers[0] = prompt("Введите ваше имя!", "");
answers[1] = prompt("Введите вашу фамилию!", "");
answers[2] = +prompt("Введите ваш возраст!", "");

