'use strict';

function first () {
    setTimeout(() => {
        console.log("Function1 Done!");
    }, 1000);
}

function second() {
    console.log("Function2 Done!");
}

first();
second();

function learnJS(lang, callback) {
    setTimeout(() => {
        console.log(`Я учу ${lang}`);
        callback();
    }, 1000);
}

function done() {
    console.log("Я выучил!");
}

learnJS("JavaScript", done);