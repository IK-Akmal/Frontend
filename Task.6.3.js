"use strict";
// Независимы ли счётчики?
// важность: 5
// Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.

// Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

{
    function makeCounter() {
        let count = 0;

        return function () {
            return count++;
        };
    }

    let counter = makeCounter();
    let counter2 = makeCounter();

    alert(counter()); // 0
    alert(counter()); // 1

    alert(counter2()); // ?
    alert(counter2()); // ?

    // Функции counter и counter2 созданы разными вызовами makeCounter.
    // Ответ: 0, 1
}


//--------------------------------------------------------------------- 

// Объект счётчика
// важность: 5
// Здесь объект счётчика создан с помощью функции-конструктора.

// Будет ли он работать? Что покажет?

{
    function Counter() {
        let count = 0;

        this.up = function () {
            return ++count;
        };
        this.down = function () {
            return --count;
        };
    }

    let counter = new Counter();

    alert(counter.up()); // -> 1 
    alert(counter.up()); // -> 2
    alert(counter.down()); // -> 1

}

// Ответ: будет работать.
// 1; 2; 1.

//-----------------------------------------------------------------------------

// Функция в if
// Посмотрите на код. Какой будет результат у вызова на последней строке?

{
    let phrase = "Hello";

    if (true) {
        let user = "John";

        function sayHi() {
            alert(`${phrase}, ${user}`);
        }
    }

    sayHi();
    //Ответ: будет ошибка. так как она живёт только внутри блока If.
}


//------------------------------------------------------------------------------------

// Сумма с помощью замыканий
// важность: 4
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

// Например:

// sum(1)(2) = 3
// sum(5)(-1) = 4

{
    function sum(arg) {
        return (arg2) => {
            return arg + arg2;
        };
    }

    console.log(sum(5)(3));
}


//-----------------------------------------------------------------------------------

// Фильтрация с помощью функции
// важность: 5
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. 
// Если она возвращает true, то элемент добавится в возвращаемый массив.

// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:

// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

{
    function inBetween(start, end) {
        return (arg) => {
            return start <= arg && arg <= end;
        }
    }

    function inArray(arr) {
        return (arg) => {
            return arr.includes(arg);
        }
    }

    let arr = [1, 2, 3, 4, 5, 6, 7];

    console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

    console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
}

//--------------------------------------------------------------------------------------------- 

// Сортировать по полю
// важность: 5
// У нас есть массив объектов, который нужно отсортировать:

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];
// Обычный способ был бы таким:

// // по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// // по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Можем ли мы сделать его короче, скажем, вот таким?

// users.sort(byField('name'));
// users.sort(byField('age'));
// То есть, чтобы вместо функции, мы просто писали byField(fieldName).

// Напишите функцию byField, которая может быть использована для этого.


{
    function byField(fieldName) {
        return (arg1, arg2) => {
            return arg1[fieldName] > arg2[fieldName] ? 1 : -1;
        }
    }
    let users = [
        { name: "John", age: 20, surname: "Johnson" },
        { name: "Pete", age: 18, surname: "Peterson" },
        { name: "Ann", age: 19, surname: "Hathaway" }
    ];

    users.sort(byField('name'));
    users.sort(byField('age'));
}


//--------------------------------------------------------------------------------------------


// Армия функций
// важность: 5
// Следующий код создаёт массив из стрелков (shooters).

// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…
{

    function makeArmy() {
        let shooters = [];

        let i = 0;
        while (i < 10) {
            let shooter = function () { // функция shooter
                alert(i); // должна выводить порядковый номер
            };
            shooters.push(shooter);
            i++;
        }

        return shooters;
    }

    let army = makeArmy();

    army[0](); // у 0-го стрелка будет номер 10
    army[5](); // и у 5-го стрелка тоже будет номер 10
}
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
// Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.

// Ответ: Всё потому что внутри функций shooter нет локальной переменной i 
// когда вызывается такая функция она берёт i из своего внешнего лексического окружения. 

{
    function makeArmy() {
        let shooters = [];

        for (let i = 0; i < 10; i++) {
            let shooter = function () { 
                alert(i);
            };
            shooters.push(shooter);
        }

        return shooters;
    }

    let army = makeArmy();

    army[0]();
    army[5]();
}
