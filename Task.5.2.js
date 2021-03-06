// Сумма пользовательских чисел
// важность: 5
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

{
    let a = +prompt("Введите первое число", "");
    let b = +prompt("Введите второе число", "");

    alert(a + b);
}

//-------------------------------------------------------------------------------------------



// Ввод числового значения
// важность: 5
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, 
// пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, 
// отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.


{
    function readNumber() {
        let input;

        do {
            input = prompt("Введите число", 0);
        } while (!isFinite(input));

        if (input === null || input === '') {
            return null;
        }

        return Number(input);
    }
}


//--------------------------------------------------------------------


// Бесконечный цикл по ошибке
// важность: 4
// Этот цикл – бесконечный. Он никогда не завершится, почему?

let i = 0;
while (i != 10) {
    i += 0.2;
}

// ответ: из-за погрешности мантиссы


//---------------------------------------------------------------------------------------------


// Случайное число от min до max
// важность: 2
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

{
    function random(min, max) {
        return Math.random() * (max - min) + min
    }

    console.log(random(1, 5));
    console.log(random(1, 4));
    console.log(random(2, 5));
    console.log(random(3, 5));
    console.log(random(4, 6));
}


//----------------------------------------------------------------------------------------------------


// Случайное целое число от min до max
// важность: 2
// Напишите функцию randomInteger(min, max), 
// которая генерирует случайное целое (integer) число от min до max (включительно).

// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

// Пример работы функции:



{
    function randomInteger(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }

    console.log(random(1, 5));
    console.log(random(1, 4));
    console.log(random(2, 5));
    console.log(random(3, 5));
    console.log(random(4, 6));
}