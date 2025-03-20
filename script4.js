'use strict';

const arr = ['324', '1789', '1943', '2239', '1978', '642', '4973']

//Вариант 1: с занесением чисел в новый массив

const arrNumbers = function () {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
            result.push(arr[i]);
        }
    }

    return result;
}

//Вариант 2: с выводом в консоль прямо в цикле

const arrNumbers2 = function () {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
            console.log(arr[i]);
        }
    }
}

arrNumbers2();

console.log(arrNumbers());

//---------------вторая часть--------------------//

const primeNumbers = function (n) {
    for (let i = 0; i <= n; i++) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break
            }
        }

        if (isPrime) {
            console.log(i + ' делители этого числа: 1 и ' + i)
        }
    }
}

primeNumbers(100)
