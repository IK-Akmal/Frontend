"use strict";
// Фильтрация уникальных элементов массива
// важность: 5
// Допустим, у нас есть массив arr.

// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
// P.S. Здесь мы используем строки, но значения могут быть любого типа.
// P.P.S. Используйте Set для хранения уникальных значений.
{
    function unique(arr) {
        return [...new Set(arr)];
    }

    let values = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

    console.log(unique(values));
}


//-------------------------------------------------------------------------------------------------

// Отфильтруйте анаграммы
// важность: 4
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

{
    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    function aclean(array) {
        const dictionary = new Map();

        for (let item of array) {
            let word = item.toLowerCase().split("").sort().join("");
            dictionary.set(word, item);
        }
        return dictionary.values();
    }


    console.log(aclean(arr));
}


// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.



//---------------------------------------------------------------------------------


// Перебираемые ключи
// важность: 5
// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

// Но это не выходит:

{
    let map = new Map();

    map.set("name", "John");

    let keys = [...map.keys()];


    keys.push("more");
    console.log(keys);
}