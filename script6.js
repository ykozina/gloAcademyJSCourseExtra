'use strict'

let longDate = document.querySelector('.current__date');
let shortDate = document.querySelector('.current__date.short');

//let currentDay = new Date();

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

const hour = function () {
    const currentDay = new Date();
    let wordDeclension = 'часа';

    if (currentDay.getHours() === 1 || currentDay.getHours() === 21) {
        wordDeclension = 'час';
    } else if (currentDay.getHours() >= 5 && currentDay.getHours() <= 20) {
        wordDeclension = 'часов'
    };

    return wordDeclension;
}

const minutes = function () {
    const currentDay = new Date();
    let wordDeclension = 'минут';

    if (currentDay.getMinutes() % 10 == 1) {
        wordDeclension = 'минута';
    } else if (currentDay.getMinutes() > 20 && currentDay.getMinutes() % 10 >= 2 && currentDay.getMinutes() % 10 < 5) {
        wordDeclension = 'минуты'
    };

    return wordDeclension;
}

const seconds = function () {
    const currentDay = new Date();
    let wordDeclension = 'секунд';

    if (currentDay.getSeconds() % 10 == 1 && currentDay.getSeconds() != 11) {
        wordDeclension = 'секунда';
    } else if (currentDay.getSeconds() > 20 && currentDay.getSeconds() % 10 >= 2 && currentDay.getSeconds() % 10 < 5) {
        wordDeclension = 'секунды'
    };

    return wordDeclension;
}

function showTime() {
    const currentDay = new Date();

    longDate.textContent = 'Сегодня ' + currentDay.toLocaleString("ru", options) + ' ' + currentDay.getHours() + ' ' + hour() + ' ' + currentDay.getMinutes() + ' ' + minutes() + ' ' + currentDay.getSeconds() + ' ' + seconds();
    shortDate.textContent = currentDay.toLocaleString()
}

let refreshTime = setInterval(showTime, 1000);
