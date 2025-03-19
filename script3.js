'use strict';

let str = prompt("Введите текст");
//let str = '12';

const symbolsCount = function (text) {
    if (typeof text != 'string') {
        console.log('Ошибка');
    } else {
        let cleanText = text.trim();
        if (cleanText.length > 30) {
            return cleanText.slice(0, 30).padEnd(33, ".")
        } else {
            return cleanText;
        }
    }
}

console.log(symbolsCount(str));