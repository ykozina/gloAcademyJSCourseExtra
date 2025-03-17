let lang = prompt("Выберите язык: ru или en");
console.log(lang);

// первый вариант - через if 
if (lang === 'ru') {
    console.log("Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
} else {
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
}

// второй вариант - через switch-case
switch (true) {
    case lang === 'ru':
        console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
        break
    case lang === 'en':
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
        break
}

//третий вариант - через многомерный массив (объект)
let weekDays = {
    ru: ['Понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

console.log(weekDays[lang].join(', '));

//

let namePerson = prompt("Введите имя");

namePerson == "Артем"
    ? console.log("директор")
    : namePerson == "Александр"
        ? console.log("преподаватель")
        : console.log("студент")