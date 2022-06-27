"use strict";

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

{
    function printNumbers(from, to) {
        let current = from;

        setTimeout(function start() {
            console.log(current);
            if (current < to) {
                setTimeout(start, 1000)
            }
            current++;
        }, 1000)
    }
    printNumbers(3,5);
}
{
    function printNumbers(from, to) {
        let current = from;

       const id = setInterval(function start() {
            console.log(current);
            if (current === to) {
                clearInterval(id)
            }
            current++;
        }, 1000)
    }
    printNumbers(3,5);
}

//---------------------------------------------------------------------------------------

