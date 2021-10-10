'use strict';
const isNumber = function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));
}


function number(x) {
    function ask1() {
        const ask = prompt("Угадай число от 1 до 100");
        if (ask > x) {
            alert("Загаданное число меньше");
            ask1();
        } else if (ask < x && ask != null) {
            alert("Загаданное число больше");
            ask1();
        } else if (isNumber(ask) == false && ask != null) {
            alert("Введи число!");
            ask1();
        } else if (ask === null) {
            alert("Игра окончена");
        } else if (ask == x) {
            alert("Вы угадали!!!");
        }
    }
    ask1();
}
number(50);