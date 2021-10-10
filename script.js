'use strict';
const isNumber = function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));
}


function number(x, y) {
    function ask1() {
        let ask = prompt("Угадай число от 1 до 100");
        y--;
        if (ask > x && y != 0) {
            alert("Загаданное число меньше, осталось попыток " + y);
            ask1();
        } else if (ask < x && ask != null && y != 0) {
            alert("Загаданное число больше , осталось попыток " + y);
            ask1();
        } else if (isNumber(ask) == false && ask != null) {
            alert("Введи число!");
            ask1();
        } else if (ask === null) {
            alert("Завершается");
        } else if (ask == x) {
            ask = prompt("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
            if (ask == "") {
                y = 10;
                ask1();
            }
        } else if (y == 0) {
            ask = prompt("Попытки закончились, хотите сыграть еще?");
            if (ask == "") {
                y = 10;
                ask1();
            }
        }


    }
    ask1();
}
number(50, 10);