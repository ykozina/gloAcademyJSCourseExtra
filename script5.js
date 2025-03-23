'use strict';

const week = ['Понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

let currentDay = new Date();
let weekDay = currentDay.getDay();

if (weekDay === 0) {
    weekDay = 6;
} else {
    weekDay--;
}

week.forEach(function (item) {
    let day = document.createElement('p');

    day.textContent = item.trim().charAt(0).toUpperCase() + item.trim().slice(1).toLowerCase();;
    day.className = 'week__day';
    if (week.indexOf(item) === 5 || week.indexOf(item) === 6) {
        day.classList.add('week__day--rest')
    } if (week.indexOf(item) === weekDay) {
        day.style.fontWeight = 'bold';
        day.style.border = 'solid 1px #000';
    }

    document.querySelector('.week__wrapper').append(day);
})

console.log(currentDay, week[weekDay]);