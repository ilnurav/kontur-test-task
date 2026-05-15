/**
 * Тестовое задание: I. JavaScript
 * Для запуска в Node.js используйте команду: node solutions.js
 */

// Простая обертка для удобного использования assert из консоли
const assert = console.assert.bind(console);

console.log("Запуск проверок...");

// ==========================================
// 1. Рекурсивная функция getFact(n)
// ==========================================
function getFact(n) {
    if (n <= 1) {
        return 1;
    }
    return n * getFact(n - 1);
}

// Проверка:
assert(getFact(1) == 1, "getFact(1) должен быть 1");
assert(getFact(4) == 24, "getFact(4) должен быть 24");
assert(getFact(6) == 720, "getFact(6) должен быть 720");


// ==========================================
// 2. Функция capitalize(str)
// ==========================================
function capitalize(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Проверка:
assert(capitalize("foo") == "Foo", "capitalize('foo') ошибка");
assert(capitalize("Bar") == "Bar", "capitalize('Bar') ошибка");
assert(capitalize("hello World!") == "Hello World!", "capitalize('hello World!') ошибка");


// ==========================================
// 3. Функция getNFunctions(n)
// ==========================================

/* * Пояснение разницы:
 * В версии до ES2015 (ES5) переменные, объявленные через `var`, имеют функциональную 
 * область видимости. Если создавать функции внутри цикла `for` без замыкания, 
 * все они будут ссылаться на одну и ту же переменную `i`, которая после завершения 
 * цикла будет равна `n + 1`. Чтобы избежать этого, используется IIFE 
 * (Immediately Invoked Function Expression) для создания новой области видимости.
 * * В версии ES2015 (ES6) и новее переменные, объявленные через `let`, имеют блочную 
 * область видимости. На каждой итерации цикла создается новая привязка, поэтому 
 * каждая функция замыкает свое собственное, правильное значение `i`.
 */

// Редакция 1: До ES2015 (без использования let и const)
function getNFunctionsES5(n) {
    var result = [];
    for (var i = 1; i <= n; i++) {
        (function(currentIndex) {
            result.push(function() {
                return currentIndex;
            });
        })(i);
    }
    return result;
}

// Редакция 2: Начиная с ES2015 (актуальный вариант)
function getNFunctions(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        result.push(() => i);
    }
    return result;
}

// Проверка (используем ES6 версию, но можно подставить и ES5):
const result = getNFunctions(4);
assert(result[0]() == 1, "getNFunctions: результат 1-й функции должен быть 1");
assert(result[2]() == 3, "getNFunctions: результат 3-й функции должен быть 3");


// ==========================================
// 4. Функция getTotalPrice()
// ==========================================
/*
 * Для избежания проблемы потери точности при работе с числами 
 * с плавающей точкой (стандарт IEEE 754), переводим рубли в копейки 
 * (умножаем на 100 и округляем), складываем целые числа, а затем делим на 100.
 */
function getTotalPrice() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        // Умножаем на 100 и используем Math.round для защиты от артефактов вроде 0.2999999999999999
        sum += Math.round(arguments[i] * 100);
    }
    return sum / 100;
}

// Проверка:
assert(getTotalPrice(0.21, 0.79) == 1, "getTotalPrice(0.21, 0.79) должен быть 1");
assert(getTotalPrice(0.20, 10.33, 23.4, 100) == 133.93, "getTotalPrice(0.20, 10.33, 23.4, 100) ошибка");

console.log("Проверки завершены. Если нет сообщений об ошибках (Assertion failed), значит всё работает верно!");
