//создаем переменную для числа
let num = 266219;

//переводим число в массив символов
let digits = num.toString().split("");

//создаем переменную для результата
let result = 1;

//с помощью цикла преобразуем каждый элемент массива в число и перемножаем их между собой
digits.forEach(element => {
    element.Number;
    result *= element;
});

console.log("При перемножении цифр числа " + num + " получится " + result);

//возведем число в степень
result **= 3;

console.log("При возведении полученного результата в куб первые две цифры результата будут " + String(result).slice(0, 2));


// второй вариант:
// воспользуемся оператором расширения, чтобы сразу разбить число на массив чисел

console.log("\n\n Начало второго решения \n\n")

let num2 = 266219;
let digits2 = [...num2.toString().split("")].map(Number);
let result2 = 1;

digits2.forEach(element => {
    result2 *= element;
});

console.log("При перемножении цифр числа " + num2 + " получится " + result2);
console.log("При возведении полученного результата в куб первые две цифры результата будут " + String(result2 ** 3).slice(0, 2));



